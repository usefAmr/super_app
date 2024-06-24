import * as paymentController from './controller/payments.js'
import {Router} from 'express'




const  router = Router()
router.post('/getPaymentHistory',paymentController.getPaymentById)

router.post('/getAllPaymentHistory',paymentController.getAllPayments)
router.post('/addPaymentHistory',paymentController.addPayment)

router.put('/confirmPayment',paymentController.updatePaymentStateToSuccessful)

export default router;
