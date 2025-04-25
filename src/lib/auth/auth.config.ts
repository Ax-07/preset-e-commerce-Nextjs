// @/src/lib/auth/auth.config.ts

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "../database/prisma.client";
import { authenticateUser } from "./auth.services";
import { stripe } from "../stripe/stripe.config";

export const { handlers, auth } = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma as any),
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email et mot de passe requis !");
        }

        // Utiliser la fonction authenticateUser() pour vérifier l'utilisateur
        const result = await authenticateUser(
          credentials.email as string,
          credentials.password as string
        );

        if (!result.success || !result.user) {
          throw new Error(result.error || "Authentification échouée");
        }

        return result.user;
      },
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        
        // Création Stripe si nécessaire
        const existingUser = await prisma.user.findUnique({
          where: { id: user.id },
        });
        
        if (!existingUser?.stripeCustomerId && existingUser?.email) {
          const userId = existingUser?.id;
          const email = existingUser?.email
          const stripeCustomer = await stripe.customers.create({
          email,
          metadata: { userId },
        });
  
          await prisma.user.update({
            where: { id: user.id },
            data: { stripeCustomerId: stripeCustomer.id },
          });
  
          console.log("Stripe customer created in JWT callback");
        }
      }
  
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth", // Page de connexion personnalisée
  },
});

export const getAuthSession = async () => {
  const session = await auth();
  return session;
};