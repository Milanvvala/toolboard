import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/utils/db"
import authConfig from "@/auth.config"

export const {
  handlers: { GET, POST },
  auth
} = NextAuth({
  // pages: { signIn: "/auth/login",  error: "/auth/error" },
  // callbacks: {},
  theme:{
    logo:'/logo.svg'
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig
})
