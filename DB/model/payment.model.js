import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now 
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    services: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'serviceModel',
        required: true
    },
    bankCard: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BankCard', 
        required: true
    },
    state: {
        type: String,
        enum: ['pending', 'successful'],
        default: 'pending'
    },
    PaymentMethodId: {
        type: mongoose.Schema.Types.ObjectId, // Changed from Number to ObjectId
        ref: 'PaymentMethod',
        required: true // Assuming this field is required
    }
});

const Payment = mongoose.model('Payment', PaymentSchema);

export default Payment;