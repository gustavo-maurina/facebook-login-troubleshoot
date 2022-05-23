import NextAuth from "next-auth/next";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  providers: [
    FacebookProvider({
      idToken: true,
      clientId: "392039059588230",
      clientSecret: "5e50ebb6b06a8ac6e380d0fb38621b1a",
      wellKnown: "https://www.facebook.com/.well-known/openid-configuration",
      token: {
        url: "https://www.facebook.com/v11.0/dialog/oauth",
        params: { scope: "openid email public_profile" },
      },
    }),
  ],
  secret: "sunSAd2RkCajg2DLR3+5MfsinFwws8ZuzfPm2C+FXkc=",
});
