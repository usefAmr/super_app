import joi from "joi";

export const serviceAgentSchema = joi.object({
    _id:joi.number().optional(),
    agentEnglishName: joi.string().required(),
    agentArabicName: joi.string().required(),
    serviceId: joi.number().required(),
    serviceAgentfees: joi.number().required(),
    state: joi.string().valid('active', 'locked'),
    isVisible: joi.boolean().required(),
    hasCalendar: joi.boolean().required(),
});