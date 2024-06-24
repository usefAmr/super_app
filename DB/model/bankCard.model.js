import mongoose from 'mongoose';

const BankCardSchema = new mongoose.Schema({
    holderName: {
        type: String,
        required: true
    },
    expirationDate: {
        type: Date,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    }
});

const BankCard = mongoose.model('BankCard', BankCardSchema);

export default BankCard;
