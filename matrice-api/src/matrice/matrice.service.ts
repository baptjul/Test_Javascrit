import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Matrice } from 'src/types/matrice';
import { SavedDTO } from './matrice.dto';

@Injectable()
export class MatriceService {

    constructor(
        @InjectModel('Matrice') private matriceModel: Model<Matrice>,
      ) {}
    
      async create(SavedDTO: SavedDTO) {
        const createdCalcul = new this.matriceModel(SavedDTO);
        await createdCalcul.save();
        return "Matrice saved";
      }
      
      async findByUser(SavedDTO: SavedDTO) {
        const user = SavedDTO.user;
        const matrice = await this.matriceModel.findOne({ user });
        if (!user) {
          throw new HttpException('matrice not found', HttpStatus.BAD_REQUEST);
        }
        return matrice;
      }
}
