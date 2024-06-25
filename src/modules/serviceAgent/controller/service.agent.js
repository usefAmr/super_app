import serviceAgentModel from "../../../../DB/model/service.agent.model.js"; 
import { asyncHandler } from "../../../utils/errorHandling.js"; 

export const createServiceAgent = asyncHandler(async (req, res, next) => {
    const newServiceAgent = await serviceAgentModel.create(req.body);
    res.status(201).json({ message: "Created", data: newServiceAgent });
});

export const getServiceAgentById = asyncHandler(async (req, res, next) => {
    const { id } = req.body;
    const serviceAgent = await serviceAgentModel.findById(id);
    if (!serviceAgent) {
        return res.status(404).json({ message: "Not Found" });
    }
    res.json({ message: "Found", data: serviceAgent });
});

export const getAllServiceAgents = asyncHandler(async (req, res, next) => {
    const serviceAgents = await serviceAgentModel.find();
    res.json({ message: "Done", data: serviceAgents });
});

export const updateServiceAgent = asyncHandler(async (req, res, next) => {
    const {id,agentEnglishName,agentArabicName,serviceAgentfees,state,isVisible,hasCalendar } = req.body;
    const updatedServiceAgent = await AgentcallenderModel.findOneAndUpdate({ _id: id},{agentEnglishName,agentArabicName,serviceAgentfees,state,isVisible,hasCalendar },{new:true})
    return res.status(200).json({ message: "Done", Service_Agent: updatedServiceAgent })})