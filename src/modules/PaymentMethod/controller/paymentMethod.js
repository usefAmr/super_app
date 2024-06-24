import PaymentMethod from "../../../../DB/model/payment.method.model.js";
import { asyncHandler } from "../../../utils/errorHandling.js";

export const getAllPaymentMethods = asyncHandler(async (req, res) => {
    const paymentMethods = await PaymentMethod.find({});
    res.status(200).json(paymentMethods);
});

// Function to add a new payment method
export const addPaymentMethod = asyncHandler(async (req, res) => {
    const { name } = req.body;

    const newPaymentMethod = new PaymentMethod({
        name
    });

    const savedPaymentMethod = await newPaymentMethod.save();

    res.status(201).json(savedPaymentMethod);
});