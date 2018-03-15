import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const labelsSchema = new Schema({
    id: Number,
    title: String
})

labelsSchema.index({index:1});

const Labels = mongoose.model('Labels', labelSchema);

export default Labels;