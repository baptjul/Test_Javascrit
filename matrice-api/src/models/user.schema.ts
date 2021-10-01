import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const UserSchema=new mongoose.Schema({
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true},

})

/*hash du mot de passe*/
UserSchema.pre('save', async function(next) {
    try {
      if (!this.isModified('password')) {
        return next();
      }
      const hash = await bcrypt.hash(this['password'], 10);
      this['password'] = hash;
      return next();
    } catch (err) {
      return next(err);
    }
  });