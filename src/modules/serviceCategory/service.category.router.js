import {Router} from "express";
import * as serviceCategories from "./controller/service.category.js";
import {validation} from "../../middleware/validation.js"
import * as validators from "./service.category.validation.js"
import { fileUpload, fileValidation } from '../../utils/cloudMulter.js';
import {isAdmin} from '../../middleware/isAdmin.js'
import { auth } from '../../middleware/authMiddleware.js'
const router =Router();


router.post('/createServiceCategory',validation(validators.ServiceCategorySchema),fileUpload(fileValidation.image).single('image'), serviceCategories.createServiceCategory);
router.get('/getServiceCategoryById',serviceCategories.getServiceCategoryById);
router.get('/getAllServiceCategories', serviceCategories.getAllServiceCategories);
router.put('/updateServiceCategories', serviceCategories.updateServiceCategories);


export default router;