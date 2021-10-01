import * as mongoose from 'mongoose';

export const MatriceSchema=new mongoose.Schema({
    calcul:[{type:Number,required:true}],
    id:{type:Number,required:true},
})
