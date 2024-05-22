import mongoose from 'mongoose';

mongoose.pluralize(null);

const collection = 'collection';

const schema = new mongoose.Schema({
    prop: { type: String, required: true }
});

const model = mongoose.model(collection, schema);

export default model;
