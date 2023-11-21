import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection = {};
  try {
    if (connection.isConnect) return;
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnect = db.connections[0].readyState;
  } catch (error) {
    throw new Error(error);
  }
};
