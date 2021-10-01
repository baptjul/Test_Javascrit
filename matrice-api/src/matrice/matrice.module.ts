import { Module } from '@nestjs/common';
import { MatriceService } from './matrice.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MatriceSchema } from '../models/matrice.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Matrice', schema: MatriceSchema }]),
   
  ],
  providers: [MatriceService],
  controllers: [],
  exports: [MatriceService],

})
export class UserModule {}
