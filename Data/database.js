import mongoose from "mongoose";

const MongoURI = process.env.MONGO_URI;

export const connectToDB = async () => {
  try {
    await mongoose.connect(MongoURI, {
      dbName: "Notes_App",
    });
    console.log("database connected");
  } catch (e) {
    console.log(e);
  }
};
