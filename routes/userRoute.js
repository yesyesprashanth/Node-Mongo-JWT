import express from 'express';
const router = express.Router();
import { userLogin, userRegister } from '../controllers/userContolller.js';

router.get('/', userLogin);
router.post('/', userRegister);

export default router;