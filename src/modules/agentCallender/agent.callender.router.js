import {Router} from "express";
import * as callenderController from "./controller/agent.callender.js";
import * as validators from "./callender.validation.js"
import {validation} from "../../middleware/validation.js"
import { auth } from '../../middleware/authMiddleware.js'
import {isAdmin} from '../../middleware/isAdmin.js'
const router =Router();

router.post('/createCallenderAgent',validation(validators.CallenderSchema),callenderController.createAgentCallender);
router.get("/getCallenderAgentById",callenderController.getAgentCallender);
router.get("/getCallenderAgent",callenderController.getAllAgentCallender);
router.put("/updateCallenderAgent",callenderController.updateAgentCallender);

export default router;