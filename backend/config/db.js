const mongoose=require('mongoose')
const colors=require('colors')
const connectDB=async ()=>{
    try{
        let conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`successfully connected to the mongodb server ${conn.connection.host}`.bgGreen.magenta)

    }catch(error){
        console.log(`Error while connection to database ${error}`.red)
    }
}
module.exports=connectDB