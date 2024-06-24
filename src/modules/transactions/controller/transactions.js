import userModel from "../../../../DB/model/User.model.js";
import transactionModel from "../../../../DB/model/transaction.model.js"
import { asyncHandler } from "../../../utils/errorHandling.js";


export const createTransaction = asyncHandler(async (req, res, next) => {
    const {userId, amount, type} = req.body;
    // Create the transaction
    const transaction = new transactionModel({ userId, amount, type });
    await transaction.save();

    // Update the user's balance
    const user = await userModel.findById(userId);
    if (type === 'deposit') {
        user.balance += amount;
    } else if (type === 'withdrawal') {
        user.balance -= amount;
    }
    await user.save();
    res.json({ message: "Done", transaction })
})