import {Router} from "express";
import { auth } from '../../middleware/authMiddleware.js'
import * as serviceCategories from "./controller/service.category.js";
import {validation} from "../../middleware/validation.js"
import {isAdmin} from '../../middleware/isAdmin.js'
const router =Router();


router.post('/createServiceCategory', serviceCategories.createServiceCategory);
router.get('/getServiceCategoryById/:id',serviceCategories.getServiceCategoryById);
router.get('/getAllServiceCategories',isAdmin, serviceCategories.getAllServiceCategories);
router.put('/updateServiceCategories',isAdmin, serviceCategories.updateServiceCategories);


export default router;