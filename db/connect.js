import mongoose from "mongoose";

const connectDb=async (Database_uri)=>{
    try {
        const Option={
            dbName:'School',
        }
        await mongoose.connect(Database_uri,Option);
        console.log("Connection Successfully..");
    } catch (err) {
        console.log(err);
    }
}
 
export default connectDb;