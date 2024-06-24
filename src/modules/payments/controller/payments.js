import paymentModel from "../../../../DB/model/payment.model.js";
import { asyncHandler } from "../../../utils/errorHandling.js";

export const getAllPayments = asyncHandler(async (req, res) => {
    const payments = await paymentModel.find({});
    res.status(200).json(payments);
});

// Function to get a specific payment by ID
export const getPaymentById = asyncHandler(async (req, res) => {
    const { id } = req.body;
    const payment = await paymentModel.findById(id);
    if (!payment) {
        return res.status(404).json({ message: 'Payment not found' });
    }
    res.status(200).json(payment);
});

export const addPayment = asyncHandler(async (req, res) => {
    const { PaymentMethodId,bankCard,services,user } = req.body;

    const newPayment = new paymentModel({
        PaymentMethodId,bankCard,services,user 
    });

    const savedPayment = await newPayment.save();

    res.status(201).json(savedPayment);
});

// Function to update the state of an existing payment to 'successful'
export const updatePaymentStateToSuccessful = asyncHandler(async (req, res) => {
    const { id } = req.body;

    const payment = await paymentModel.findByIdAndUpdate(id, { state: 'successful' }, { new: true });
    if (!payment) {
        return res.status(404).json({ message: 'Payment not found' });
    }
    res.status(200).json(payment);
});