import { Schema, model } from "mongoose";

const transactionSchema = new Schema({
 userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
 },
 amount: {
    type: Number,
    required: true
 },
 type: {
    type: String,
    enum: ['deposit', 'withdrawal'],
    required: true
 },
 date: {
    type: Date,
    default: Date.now
 }
});

const transactionModel = model('Transaction', transactionSchema);

export default transactionModel;