import mongoose from "mongoose";

export const dbconnection = () =>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName: "Restaurant"
    }).then(()=>{
        console.log("Connected to database success.");
    }).catch(()=>{
        console.log(`Some error occurred while connecting the database! ${err}`);
    });

    mongoose.connect(process.env.MONGO_URL, {
        dbName: "users",
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connected to database successfully");
    }).catch((err) => {
        console.log(`Some error occurred while connecting to the database: ${err}`);
    });

    
}



