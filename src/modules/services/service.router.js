import {Router} from "express";
import { auth } from '../../middleware/authMiddleware.js'
import * as serviceController from "./controller/service.js";
import * as validators from "./service.validation.js"
import {validation} from "../../middleware/validation.js"
import {isAdmin} from '../../middleware/isAdmin.js'
const router =Router();


router.post('/Services',serviceController.getAllServices);
router.post("/serviceWithId",serviceController.service);
router.post("/ActiveServices",serviceController.activeService);
router.post("/addServices",validation(validators.ServiceSchema),serviceController.addService);
router.put("/Services",validation(validators.ServiceSchema),serviceController.updateService);

export default router;





