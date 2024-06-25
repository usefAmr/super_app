import serviceProviderModel from '../../../../DB/model/service.provider.model.js'; 
import { asyncHandler } from '../../../utils/errorHandling.js';

export const createServiceProvider = asyncHandler(async (req, res, next) => {
    const newServiceProvider = await serviceProviderModel.create(req.body);
    res.status(201).json({ message: "Created", data: newServiceProvider });
});

export const getServiceProviderById = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const serviceProvider = await serviceProviderModel.findById(id);
    if (!serviceProvider) {
        return res.status(404).json({ message: "Not Found" });
    }
    res.status(200).json({ message: "Found", data: serviceProvider });
});

export const getAllServiceProviders = asyncHandler(async (req, res, next) => {
    const serviceProviders = await serviceProviderModel.find();
    res.status(200).json({ message: "Done", data: serviceProviders });
});

export const updateServiceProvider = asyncHandler(async (req, res, next) => {
    const {id,spEnglishName,spArabicName,active} = req.body;
    const ServiceProvider = await serviceProviderModel.findOneAndUpdate({ _id: id},{spEnglishName,spArabicName,active},{new:true})
    return res.status(200).json({ message: "Done", Service_Provider: ServiceProvider })})