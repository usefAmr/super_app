import serviceCategoryModel from '../../../../DB/model/service.category.model.js'; 
import { asyncHandler } from '../../../utils/errorHandling.js'; 
import cloudinary from "../../../utils/cloudinary.js";


export const createServiceCategory = asyncHandler(async (req, res, next) => {
    const {categoryEnglishName, categoryArabicName, active, image} = req.body;
    const folderName = `Category/${categoryEnglishName}`.trim();
    const { public_id, secure_url } = await cloudinary.uploader.upload(req.file.path, { folder: folderName});
    const newServiceCategory = await serviceCategoryModel.create({
        categoryEnglishName,
        categoryArabicName,  
        image: { public_id, secure_url },
        active 
    }); 
    res.status(200).status(201).json({ message: "Created", data: newServiceCategory });
});

export const getServiceCategoryById = asyncHandler(async (req, res, next) => {
    const { id } = req.body;
    const serviceCategory = await serviceCategoryModel.findById(id);
    if (!serviceCategory) {
        return res.status(404).json({ message: "Not Found" });
    }
    res.status(200).json({ message: "Found", data: serviceCategory });
});

export const getAllServiceCategories = asyncHandler(async (req, res, next) => {
    const serviceCategories = await serviceCategoryModel.find();
    res.status(200).json({ message: "Done", data: serviceCategories });
});

export const updateServiceCategories = asyncHandler(async (req, res, next) => {
    const {id,categoryEnglishName,categoryArabicName,active} = req.body;
    const ServiceCategories = await serviceCategoryModel.findOneAndUpdate({ _id: id},{categoryEnglishName,categoryArabicName,active},{new:true})
    return res.status(200).json({ message: "Done", Service_Categories: ServiceCategories })})