const mongoose=require('mongoose');
// const mongourl="mongodb://localhost:27017/mernb"
const mongourl="mongodb://127.0.0.1:27017/mernb"
const mongoDbConnection=async()=>{
try{
    await mongoose.connect(mongourl);
    console.log('mongoDB connected successfully.');
}
catch(err){
    console.error(`error connecting to mongoDB ${err}`);
}
}
module.exports=mongoDbConnection;