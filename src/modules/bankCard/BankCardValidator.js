import Joi from "joi"


export const bankCardSchema = Joi.object({
    holderName: Joi.string().required(),
    expirationDate: Joi.date().required(),
    cardNumber: Joi.string().creditCard().required(),
});
