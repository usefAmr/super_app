import {Schema , model} from "mongoose"

// payment.method.model.js
import mongoose from 'mongoose';
import Payment from './payment.model.js'; // Adjust the import path as necessary

const PaymentMethodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const PaymentMethod = mongoose.model('PaymentMethod', PaymentMethodSchema);

// Define the relationship
PaymentMethodSchema.virtual('payments', {
    ref: 'Payment', // The model to which you are referring
    localField: '_id', // Find payments where `localField`
    foreignField: 'PaymentMethodId' // is equal to `foreignField`
});

export default PaymentMethod;