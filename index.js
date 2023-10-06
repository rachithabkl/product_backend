const express=require('express')
const mongoDBconnection=require('./db')
mongoDBconnection()
const app=express()
app.use(express.json())
app.use('/api/product',require('./Routes/productRoutes'));
app.get('/greetings',(req,res)=>{
    console.log("hello")
    res.send("this is your first api")
})
const port=4000;
app.listen(port,()=>{
    console.log('..................................');
    console.log("app is listening on port "+port);
})