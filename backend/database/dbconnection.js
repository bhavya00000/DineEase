import mongoose from "mongoose";

export const dbconnection = () =>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName: "Restaurant"
    }).then(()=>{
        console.log("Connected to database success.");
    }).catch(()=>{
        console.log(`Some error occurred while connecting the database! ${err}`);
    })
}