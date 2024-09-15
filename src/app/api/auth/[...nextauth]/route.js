import nextAuth from "next-auth";
import githubAuth from "next-auth/providers/github";

export const authOptions = {
  providers: [
    githubAuth({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET_ID,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
