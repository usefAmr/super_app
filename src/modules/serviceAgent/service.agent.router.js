import {Router} from "express";
import { auth } from '../../middleware/authMiddleware.js'
import * as agentController from "./controller/service.agent.js";
import {validation} from "../../middleware/validation.js"
import {isAdmin} from '../../middleware/isAdmin.js'
const router =Router();

router.post('/createServiceAgent',agentController.createServiceAgent);
router.get("/getServiceAgentById",agentController.getServiceAgentById);
router.get("/getServiceAgent",isAdmin,agentController.getAllServiceAgents);
router.put("/updateServiceAgent",isAdmin,agentController.updateServiceAgent);
export default router;