import { Document } from 'mongoose';

export interface Matrice extends Document {
   calcul: [number];
   id: number;
}