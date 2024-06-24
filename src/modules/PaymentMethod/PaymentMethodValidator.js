import Joi from "joi";
export const paymentMethodSchema = Joi.object({
    name: Joi.string().required(),
});
