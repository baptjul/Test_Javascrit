import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/types/user';
import * as bcrypt from 'bcrypt';
import { LoginDTO } from 'src/auth/login.dto';
import { Payload } from 'src/types/payload';
import { RegisterDTO } from './register.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectModel('User') private userModel: Model<User>,
      ) {}
    
      async create(RegisterDTO: RegisterDTO) {
        const email = RegisterDTO.email;
        const user = await this.userModel.findOne({ email });
        if (user) {
          throw new HttpException('user already exists', HttpStatus.BAD_REQUEST);
        }
        const createdUser = new this.userModel(RegisterDTO);

        await createdUser.save();
        return this.sanitizeUser(createdUser);
      }
      async findByPayload(payload: Payload) {
        const email= payload.email;
        return await this.userModel.findOne({ email });
      }
      
      async findByLogin(UserDTO: LoginDTO) {
        const email = UserDTO.email;
        const password = UserDTO.password;
        const user = await this.userModel.findOne({ email });
        if (!user) {
          throw new HttpException('user doesnt exists', HttpStatus.BAD_REQUEST);
        }
        if (await bcrypt.compare(password, user.password)) {
          return this.sanitizeUser(user)
        } else {
          throw new HttpException('invalid credential', HttpStatus.BAD_REQUEST);
        }
      }
      // récupération de l'utilisateur (sans password)
      sanitizeUser(user: User) {
        const sanitized = user.toObject();
        delete sanitized['password'];
        return sanitized;
      }

}
