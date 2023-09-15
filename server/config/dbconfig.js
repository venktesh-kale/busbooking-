const mongoose=require('mongoose');

mongoose.connect(process.env.mongo_url);
const db=mongoose.connection;
db.on('connected',()=>{
    console.log(`mongodb conection successful`);
})
db.on('error',()=>{
    console.log('mongob db connection failed ')
})