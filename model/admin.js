import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  username: String,
  password: String,
  id: Number,
  type: Number, //1.超级管理员 2.普通管理员
})

adminSchema.index({id:1});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;