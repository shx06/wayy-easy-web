import { Schema, model, models } from "mongoose";

const TeamMemberSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    designation: { type: String, required: true },
    img: { type: String, required: true },
    facebook: { type: String, required: true },
    twitter: { type: String, required: true },
    linkedin: { type: String, required: true },
  },
  { timestamps: true }
);

const TeamMember = models.TeamMember || model("TeamMember", TeamMemberSchema);

export default TeamMember;
