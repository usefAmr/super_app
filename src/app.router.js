
import connectDB from '../DB/connection.js'
import authRouter from './modules/auth/auth.router.js'
import userRouter from './modules/user/user.router.js'
import serviceRouter from './modules/services/service.router.js'
import bankCardRouter from './modules/bankCard/bankCardRouter.js'
import paymentMethodRouter from './modules/PaymentMethod/paymentMethodRouter.js'
import paymentRouter from './modules/payments/payment.router.js'
import transactionRouter from './modules/transactions/transaction.router.js'



import {globalErrorHandling} from './utils/errorHandling.js'

const initApp = (app, express) => {
    
    app.use(express.json({}))
    app.use(authRouter)
    app.use(userRouter)
    app.use(serviceRouter)
    app.use(bankCardRouter)
    app.use(paymentMethodRouter)
    app.use(paymentRouter)
    app.use(transactionRouter)



    app.use(globalErrorHandling);
    connectDB()
}

export default initApp