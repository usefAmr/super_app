
import userModel from '../../../../DB/model/User.model.js'
import { asyncHandler } from '../../../utils/errorHandling.js';
import {generateToken,verifyToken } from '../../../utils/generate&verifyToken.js';
import { compare, hash } from '../../../utils/hash&compare.js';
import generator from 'generate-password';
import {sendEmail} from '../../../utils/sendEmail.js'

export const signUp =asyncHandler (
async(req,res,next)=>{

    const {name,email,password,cPassword,level,role,balance,faculty,study_name,national_id}=req.body
    console.log({name,email,password,cPassword,level,role,faculty,study_name,national_id});

    const checkUser =  await userModel.findOne({email})
    if(checkUser){
        return next(new Error('Email Exist' , {cause:409}))
    }
    const hashPassword = hash({
        plainText :password
    })
    
    const user =  await userModel.create({name,email,password:hashPassword,level,role,balance,faculty,study_name,national_id})
    return res.status(201).json({message : "Done",user : user._id})
})

export const login =asyncHandler(
async(req,res,next)=>{

    const {email,password}=req.body
    console.log({email,password});
    const checkUser =  await userModel.findOne({email})
    if(!checkUser){
        res.status(409) 
        return next(new Error('Email not Exist' , {cause:404}))
    }

    const matchPassword = compare({
        plainText :password,
        hashValue : checkUser.password
    })
    if(!matchPassword){
        return next(new Error('In-valid Password' , {cause:400}))

    }
    console.log(process.env.TOKEN_SIGNATURE)
    const token = generateToken({
        payload : {id : checkUser._id , name :checkUser.name,email:checkUser.email},
        signature: process.env.TOKEN_SIGNATURE,
        expiresIn :60*60
    })
    checkUser.status = 'online'
    checkUser.save()
    return res.status(201).json({message : "Done",token})
})

export const logout =asyncHandler(
    async(req,res,next)=>{

        const {token}=req.query;
        const decodded = verifyToken({ token, signature: process.env.TOKEN_SIGNATURE })

        const user = await userModel.findOneAndUpdate({email : decodded.email},{status : 'offline'},{new : true})

        return res.status(201).json({message : "logout",user})
    })


export const forgetPassword = asyncHandler( async(req,res)=>{

    const randomPassword = generator.generate({
        length: 10,
        numbers: true,
        symbols : true , exclude : `"`});

    try {
        if(!req.body.email)
        {
            return  res.send('Email is Required')
        }
        const {email}= req.body;
        const checkUser =  await userModel.findOne({email})
        if(!checkUser){
            return res.json({message : "Email not Exist"})
        }
        const hashPassword = hash({
            plainText :randomPassword
        })
        await userModel.findOneAndUpdate({email},{password : hashPassword})

        await sendEmail({to : email ,  subject: "Reset password ✔",text: `Password is Sent`,html: `<b>Your new password is: ${randomPassword}</b>`})
        return res.json({message: 'Password sent successfully'})
        }
    catch (error) {
        console.log(error)
        }
})
