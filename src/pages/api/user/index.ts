import User from "@/model/User";
import { connectDB } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

type Response = {
  success: boolean;
  message: string;
  data?: any;
};

const user = async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const { method } = req;

  await connectDB();

  switch (method) {
    // Get all Users
    case "GET":
      try {
        const users = await User.find({});
        res.json({
          success: true,
          message: "Trying to get user",
          data: users,
        });
      } catch (error) {
        console.log(error);
      }
      break;

    // Create a new User
    case "POST":
      try {
        const user = await User.create(req.body);
        res.json({
          success: true,
          message: "Trying to create user",
          data: user,
        });
      } catch (error) {
        console.log(error);
      }
      break;

    default:
      res.status(400).json({ success: false, message: "Bad request" });
      break;
  }
};

export default user;
