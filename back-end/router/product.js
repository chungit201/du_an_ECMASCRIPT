import express from 'express';
import {list ,read,add,update,productById,remove, register,listCategories, search} from '../controllers/product'
import { categoryById } from '../controllers/categories';
const router = express.Router();

router.get('/products',list);
router.get('/products/:productId',read);
router.delete('/products/:productId',remove);
router.post('/products', add);
router.get("/products/categories/:categoryId", listCategories);
router.put('/products/:productId', update);  
router.get('/search',search)
router.param('productId',productById);
router.param("categoryId", categoryById)
module.exports = router;