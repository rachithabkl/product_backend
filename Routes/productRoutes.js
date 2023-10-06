const express=require('express');
const router=express.Router();
const Insert=require('../controllers/productController')
router.post('/insert',Insert)
module.exports=router