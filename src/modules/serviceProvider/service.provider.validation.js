import joi from "joi";

export const serviceProviderSchema = joi.object({
    _id:joi.number().optional(),
    spEnglishName: joi.string().required(),
    spArabicName: joi.string().required(),
    active: joi.boolean().required(),
    categoryId: joi.number().required(),
});