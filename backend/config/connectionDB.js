import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect(process.env.CONNECTION_StRING)
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));
};

export default connectDB;
