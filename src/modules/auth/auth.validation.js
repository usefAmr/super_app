import joi from 'joi'


export const signUpSchema = 
{
    body : joi.object({
    name:joi.string().required(),
    email : joi.string().email().required(),
    password: joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).required(),
    cPassword:joi.string().valid(joi.ref("password")).required(),
    role:joi.string().valid('student','admin'),
    level:joi.number().valid(1,2,3,4),
    balance:joi.number(),
    }).required()
    
}

export const loginSchema = {
    body : joi.object({
        email : joi.string().email().required(),
        password: joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/))
    }).required()
}

export const forgetPasswordSchema=joi.object({
    email : joi.string().email().required(),
}).required();