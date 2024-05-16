import express from 'express';
const router = express.Router();
import { signup, signin, logout, userProfile } from '../controllers/authController.js';
import { isAuthenticated } from '../middleware/auth.js';

router.post('/signup', signup);

router.post('/signin', signin);

router.get('/logout', logout);

router.get('/me', isAuthenticated, userProfile);

export default router;
