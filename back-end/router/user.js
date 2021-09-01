import express from 'express';
import { listUser } from '../controllers/user';
const router = express.Router();
router.get('/user',listUser)
module.exports = router;