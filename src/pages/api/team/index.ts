import TeamMember from "@/model/TeamMember";
import { connectDB } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

const team = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  await connectDB();

  switch (method) {
    case "GET":
      try {
        const result = await TeamMember.find({});
        res.status(200).json({ success: true, data: result });
      } catch (error: any) {
        res
          .status(500)
          .json({ success: false, message: error.message, stack: error.stack });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default team;
