import joi from "joi";

export const ServiceSchema = joi.object({
    _id:joi.number().optional(),
    name: joi.string().required(),
    providerId:joi.number().required(),
    code:joi.string().required(),
    fees: joi.number().required(),
    validUntilDate: joi.date().optional(),
    image: joi.object().optional(),
    state: joi.string().valid('active', 'locked'),
});