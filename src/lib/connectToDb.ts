import mongoose from "mongoose";

// since database is far away i use try catch for error handling and async await for awaiting response

export const connectToDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI!);

    const connection = mongoose.connection;

    // on event listener with a callback
    connection.on("connected", () => {
      console.log("connected to db");
    });

    // on event listener with a callback
    connection.on("error", (error) => {
      console.log("error in connected to db: " + error);
      process.exit();
    });
  } catch (error) {
    console.log(error);
    throw new Error("Something  went wrong ");
  }
};
