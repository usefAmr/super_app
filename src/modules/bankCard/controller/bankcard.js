import BankCard from "../../../../DB/model/bankCard.model.js";
import { asyncHandler } from "../../../utils/errorHandling.js";

export const getAllBankCards = asyncHandler(async (req, res) => {
    const bankCards = await BankCard.find({});
    res.status(200).json(bankCards);
});

// Function to get a specific bank card by ID
export const getBankCardById = asyncHandler(async (req, res) => {
    const { id } = req.body;
    const bankCard = await BankCard.findById(id);
    if (!bankCard) {
        return res.status(404).json({ message: 'Bank card not found' });
    }
    res.status(200).json(bankCard);
});

export const addBankCard = asyncHandler(async (req, res) => {
    const { holderName, expirationDate, cardNumber } = req.body;

    const newBankCard = new BankCard({
        holderName,
        expirationDate,
        cardNumber
    });

    const savedBankCard = await newBankCard.save();

    res.status(201).json(savedBankCard);
});