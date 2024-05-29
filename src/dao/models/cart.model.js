import mongoose from 'mongoose';

mongoose.pluralize(null);

const collection = 'carts';

const schema = new mongoose.Schema({
    _user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'users_index' },
    products: { type: [{ _id: mongoose.Schema.Types.ObjectId, qty: Number }], required: true }
});



const model = mongoose.model(collection, schema);

export default model;