import {Router} from "express";
import { auth } from '../../middleware/authMiddleware.js'
import * as agentController from "./controller/agent.callender.js";
import {validation} from "../../middleware/validation.js"
import {isAdmin} from '../../middleware/isAdmin.js'
const router =Router();

router.post('/createCallenderAgent',agentController.createAgentCallender);
router.get("/getCallenderAgentById",agentController.getAgentCallender);
router.get("/getCallenderAgent",agentController.getAllAgentCallender);
router.put("/updateCallenderAgent",agentController.updateAgentCallender);

export default router;