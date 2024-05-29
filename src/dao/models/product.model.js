import mongoose from 'mongoose';

mongoose.pluralize(null);

const product = 'product';

const schema = new mongoose.Schema({
    title: { type: String, required: true },
    description:{type: String, required:false},
    price:{type: Number, required:true},
    thumbnail:{type: String, required:false},
    stock:{type: Number, required:true},
    code:{type: String, required:true},
});

const model = mongoose.model(product, schema);

export default model;
