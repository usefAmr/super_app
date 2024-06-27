import {Router} from "express";
import * as serviceController from "./controller/service.js";
import * as validators from "./service.validation.js"
import {validation} from "../../middleware/validation.js"
import { fileUpload, fileValidation } from '../../utils/cloudMulter.js';
import {isAdmin} from '../../middleware/isAdmin.js'
import { auth } from '../../middleware/authMiddleware.js'  
const router =Router();


router.post('/Services',serviceController.getAllServices);
router.post("/serviceWithId",serviceController.service);
router.post("/ActiveServices",serviceController.activeService);
router.post("/addServices",validation(validators.ServiceSchema),fileUpload(fileValidation.image).single('image'),serviceController.addService);
router.put("/Services",validation(validators.ServiceSchema),serviceController.updateService);

export default router;





