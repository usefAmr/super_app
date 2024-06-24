import {Router} from "express";
import { auth } from '../../middleware/authMiddleware.js'
import * as serviceController from "./controller/service.js";
import * as validators from "./service.validation.js"
import {validation} from "../../middleware/validation.js"
import {isAdmin} from '../../middleware/isAdmin.js'
const router =Router();


router.post('/Services',serviceController.getAllServices);
router.post("/serviceWithId",auth,serviceController.service);
router.post("/ActiveServices",auth,serviceController.activeService);
router.post("/addServices",auth,isAdmin,validation(validators.ServiceSchema),serviceController.addService);
router.put("/Services",auth,isAdmin,validation(validators.ServiceSchema),serviceController.updateService);

export default router;





