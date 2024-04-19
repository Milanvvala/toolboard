import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/utils/db"
import authConfig from "@/trash/auth.config"
import type { Adapter } from "next-auth/adapters"

export const {
  handlers: { GET, POST },
  auth
} = NextAuth({
  // pages: { signIn: "/auth/login",  error: "/auth/error" },
  // callbacks: {},
  theme: {
    logo: "/logo.svg"
  },
  adapter: PrismaAdapter(db) as Adapter,
  session: { strategy: "jwt" },
  ...authConfig
})
