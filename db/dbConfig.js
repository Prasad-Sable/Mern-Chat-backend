import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(
      `MongoDb Connected Succefully at Host ${connection.connection.host}`
    );
  } catch (error) {
    console.log("MongoDb Connection Failed", error);
    process.exit(1);
  }
};

export default dbConnect;
