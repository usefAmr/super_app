import { Router } from "express";
import { auth } from '../../middleware/authMiddleware.js'; 
import * as serviceProviders from "./controller/service.provider.js"; 
import { validation } from "../../middleware/validation.js"; 
import { isAdmin } from '../../middleware/isAdmin.js'; 
const router = Router();

// Create a new ServiceProvider
router.post('/createServiceProvider', serviceProviders.createServiceProvider);

// Get a ServiceProvider by ID
router.get('/getServiceProviderById', serviceProviders.getServiceProviderById);

// Get all ServiceProviders
router.get('/getAllServiceProviders', serviceProviders.getAllServiceProviders);

// Update a ServiceProvider
router.put('/updateServiceProvider', serviceProviders.updateServiceProvider);


export default router;