import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { CallbacksOptions } from "next-auth";
import { Provider } from "next-auth/providers";
import CredentialsProvider from "next-auth/providers/credentials";

const providers: Provider[] = [
  CredentialsProvider({
    name: "Credentials",
    credentials: {},
    async authorize(credentials: any) {
      try {
        const { email, password } = credentials;
        const { data } = await axios.post(
          `${process.env.NEXT_API_URL}/user/login`,
          {
            email,
            password,
          }
        );
        console.log("Data: ", data);
        if (data.data) {
          return { ...data.data };
        }
      } catch (error: any) {
        console.log(error);
        throw new Error(error.message);
      }
    },
  }),
];

const callbacks: Partial<CallbacksOptions> = {
  async jwt({ token, user }: any) {
    if (user) {
      token._id = user._id;
      token.email = user.email;
      token.accessToken = user.accessToken;
    }
    return token;
  },
  async session({ session, token }: any) {
    session.user._id = token._id;
    session.user.name = token.name;
    session.user.email = token.email;
    session.accessToken = token.accessToken;
    session.error = token.error;
    return session;
  },
  async redirect({ url }: any) {
    return url;
  },
};

export const authOptions = {
  providers,
  callbacks,
  secret: process.env.NEXT_SECRET,
  pages: { signIn: "/", signOut: "/", error: "/" },
  jwt: { maxAge: 30 * 24 * 60 * 60 },
};

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, authOptions);

export default Auth;
