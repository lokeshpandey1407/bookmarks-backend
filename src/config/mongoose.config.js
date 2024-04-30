import mongoose from "mongoose";

async function MongooseConnect() {
  try {
    await mongoose.connect(process.env.CONNECTION_URL);
    console.log("Database is connected");
  } catch (error) {
    console.log("Some error occured in connection with database");
    console.log(error);
  }
}

export default MongooseConnect;
