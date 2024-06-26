import {Router} from "express";
import * as serviceCategories from "./controller/service.category.js";
import {validation} from "../../middleware/validation.js"
import * as validators from "./service.category.validation.js"
import {isAdmin} from '../../middleware/isAdmin.js'
import { auth } from '../../middleware/authMiddleware.js'
const router =Router();


router.post('/createServiceCategory',validation(validators.ServiceCategorySchema), serviceCategories.createServiceCategory);
router.get('/getServiceCategoryById',serviceCategories.getServiceCategoryById);
router.get('/getAllServiceCategories', serviceCategories.getAllServiceCategories);
router.put('/updateServiceCategories', serviceCategories.updateServiceCategories);


export default router;