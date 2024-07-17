// declare module '*.png';
// declare module '*.jpg';

namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
    DB_URI: string;
  }
}

declare module "framer-motion";
declare module "@mui/styles";

// Declare Next Auth Session
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    accessToken?: string;
    user?: {
      _id: string;
      name: string;
      email: string;
    };
  }
}
