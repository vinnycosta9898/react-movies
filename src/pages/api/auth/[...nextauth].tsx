import { PrismaAdapter } from "../../../lib/auth/prismaAdapter"
import { NextApiRequest, NextApiResponse } from "next"
import NextAuth from "next-auth/next"
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'

export function buildNextAuthOptions(req: NextApiRequest, res:NextApiResponse){
  return{
    adapter: PrismaAdapter(req, res),
    providers:[
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.GOOGLE_SECRET_ID ?? '',
        profile(profile: GoogleProfile){
          return{
            id: profile.sub,
            name: profile.name,
            email: profile.email,
            avatar_url: profile.picture
          }
        },
      }),
    ],

    callbacks:{
      async redirect(url: any) {
       return '/home'
      },
      async session({ session, user } : any){
        return{
          ...session,
          user,
        }
      },
    },
    
  }
}

export default async function auth(req: NextApiRequest, res:NextApiResponse){
  return NextAuth(req, res, buildNextAuthOptions(req, res))
}
