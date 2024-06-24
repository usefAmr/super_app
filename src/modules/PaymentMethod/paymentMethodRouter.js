import * as paymentMethodContoller from './controller/paymentMethod.js'
import * as Validator from './PaymentMethodValidator.js'
import {Router} from 'express'
import { validation } from '../../middleware/validation.js'


export const paymentMethodRouter = Router()

paymentMethodRouter.get('/PaymentMethod',paymentMethodContoller.getAllPaymentMethods)

paymentMethodRouter.post('/paymentMethod',validation(Validator.paymentMethodSchema),paymentMethodContoller.addPaymentMethod)
export default paymentMethodRouter;