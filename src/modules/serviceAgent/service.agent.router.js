import {Router} from "express";
import { auth } from '../../middleware/authMiddleware.js'
import * as serviceAgentController from "./controller/service.agent.js";
import * as validators from "./service.agent.validation.js"
import {validation} from "../../middleware/validation.js"
import {isAdmin} from '../../middleware/isAdmin.js'
const router =Router();

router.post('/createServiceAgent',validation(validators.serviceAgentSchema),serviceAgentController.createServiceAgent);
router.get("/getServiceAgentById",serviceAgentController.getServiceAgentById);
router.get("/getServiceAgent",serviceAgentController.getAllServiceAgents);
router.put("/updateServiceAgent",serviceAgentController.updateServiceAgent);
export default router;