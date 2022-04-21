import mongoose from "mongoose";
import { createSchemas } from '../models';

export const getDBCon = async () => {
  if (mongoose.connections && mongoose.connections[0].readyState) {
    // Use current db connection
    return mongoose.models;
  }
  // Use new db connection
  const models = createSchemas(mongoose);
  await mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  return models;
}

const connectDB = (handler) => async (req, res) => {
  const dbCon = await getDBCon();

  return handler(req, res, dbCon);
};

export default connectDB;
