import mongoose from "mongoose";

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("Connected database successfully");
  } catch (error) {
    `Error connecting to MongoDB: ${error.message}`;
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
};
export default connectdb;
