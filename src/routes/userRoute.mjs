import express from 'express';
import { registerUser } from '../controllers/userController.mjs';

const router = express.Router();

//Creating a route.
router.post('/register', registerUser);

export default router;
