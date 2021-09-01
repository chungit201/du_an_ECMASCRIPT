import express from 'express';
import { add, list } from '../controllers/post';
const router = express.Router();
    router.get('/blog',list)
    router.post('/blog',add);
   
module.exports = router;