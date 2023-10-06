const ProductSchema=require('../models/Product')
const Insert=async(req,res)=>{
    const{name,desc,price,qty}=req.body;
    let totalAmount=price*qty;
    try{
        const Product=await new ProductSchema({name,description:desc,price,quantity:qty,total:totalAmount})
        const savedProduct=Product.save();
        console.log("Product Inserted Successfully");
        res.json({savedProduct:Product});

    }
    catch(err){
        console.error('Error while inserting product,err');
        res.json(err);

    }
}
module.exports=Insert