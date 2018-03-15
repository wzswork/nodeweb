import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  updateTime: Date,
  createTime: Date,
  title: String,
  digest: String,
  label: Number,
  id: Number,
  content: String
})
blogSchema.index({index: 1});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;