import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("connected");
  } catch (err) {
    console.log(`Error: ${err.message}}`);
    process.exit(1);
  }
};

export default connectDB;
