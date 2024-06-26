import joi from "joi";

export const CallenderSchema = joi.object({
    _id:joi.number().optional(),
    fromDate: joi.date().required(),
    toDate: joi.date().required(),
    fromHour: joi.number().required(),
    toHour: joi.number().required(),
    slots: joi.number().required(),
    serviceAgentId: joi.number().required(),
});