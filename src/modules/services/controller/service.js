import serviceModel from "../../../../DB/model/Service.model.js";
import { asyncHandler } from "../../../utils/errorHandling.js";


export const getAllServices = asyncHandler(async (req, res, next) => {
    const services = await serviceModel.find();
    res.json({ message: "Done", services })
})

export const service = asyncHandler(async (req, res, next) => {
    const {_id}=req.body
    const service = await serviceModel.findOne({ _id: _id});
    return res.status(200).json({ message: "Done", service })
})

export const activeService = asyncHandler(async (req, res, next) => {
    console.log(req.user);
    const service = await serviceModel.find({state : 'active' });
    return res.status(200).json({ message: "Done", service })
})

// DELETE USER
export const addService = asyncHandler(async (req, res, next) => {
    const {name,validUntilDate,fees,state} = req.body
    const service = await serviceModel.create({name,validUntilDate,fees,state});
    return res.status(200).json({ message: "Done", service })
})

  // UPDATE 
export const updateService = asyncHandler(async (req, res, next) => {
    const {_id,name,validUntilDate,fees,state } = req.body;
    const updatedService = await serviceModel.findOneAndUpdate({ _id: _id},{name,validUntilDate,fees,state},{new:true})
    return res.status(200).json({ message: "Done", Service: updatedService })
})



