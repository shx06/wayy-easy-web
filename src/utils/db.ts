import mongoose, { ConnectOptions } from "mongoose";
const connection: any = {};

const connectDB = async (): Promise<void> => {
  if (connection.isConnected) {
    process.env.NODE_ENV === "production" || console.log("Already connected to database");
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      process.env.NODE_ENV === "production" || console.log("using existing connection");
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(process.env.DB_URI || "", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);
  connection.isConnected = db.connections[0].readyState;
  process.env.NODE_ENV === "production" || console.log("Database connection successful");
};

const disconnectDB = async (): Promise<void> => {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("not disconnected");
    }
  }
};

export { connectDB, disconnectDB };
