import * as bankCardController from './controller/bankcard.js'
import * as BankCardValidator from "./BankCardValidator.js"
import { validation } from '../../middleware/validation.js'


import {Router} from "express";

const router =Router();
router.get('/bankCards',bankCardController.getAllBankCards)
router.get('/bankCardsOfUser',bankCardController.getBankCardById)

router.post('/bankCard',validation(BankCardValidator.bankCardSchema),bankCardController.addBankCard)


export default router;