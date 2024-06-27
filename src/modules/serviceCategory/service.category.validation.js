import joi from "joi";

export const ServiceCategorySchema = joi.object({
    _id:joi.number().optional(),
    categoryEnglishName: joi.string().required(),
    categoryArabicName: joi.string().required(),
    image: joi.object().optional(),
    active: joi.boolean().required(),
});