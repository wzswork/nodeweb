import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: Number,
  username: String,
  password: String,
  email: String,
  phone: String
})

userSchema.index({index:1});

const User = mongoose.model('User', userSchema);

export default User