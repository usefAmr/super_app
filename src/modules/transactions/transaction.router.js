import {Router} from "express";
import {createTransaction}from "./controller/transactions.js";

const router =Router();

router.post("/transaction",createTransaction);

export default router;

