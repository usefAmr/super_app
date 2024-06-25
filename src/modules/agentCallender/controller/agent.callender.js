import AgentcallenderModel from "../../../../DB/model/agent.callender.model.js";
import { asyncHandler } from "../../../utils/errorHandling.js";

export const createAgentCallender = asyncHandler(async (req, res, next) => {
    const AgentCallender = await AgentcallenderModel.create(req.body);
    res.status(201).json({ message: "Created", data: AgentCallender });
});

export const getAgentCallender = asyncHandler(async (req, res, next) => {
    const { id } = req.body;
    const AgentCallender = await AgentcallenderModel.findById(id);
    if (!AgentCallender) {
        return res.status(404).json({ message: "Not Found" });
    }
    res.status(201).json({ message: "Found", data: serviceAgent });
});

export const getAllAgentCallender = asyncHandler(async (req, res, next) => {
    const AgentCallender = await AgentcallenderModel.find();
    res.status(201).json({ message: "Done", data: AgentCallender });
});

export const updateAgentCallender = asyncHandler(async (req, res, next) => {
    const {id,fromDate,toDate,fromHour,toHour,slots } = req.body;
    const updatedCallender = await AgentcallenderModel.findOneAndUpdate({ _id: id},{fromDate,toDate,fromHour,toHour,slots },{new:true})
    return res.status(200).json({ message: "Done", callender: updatedCallender })})