import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from '@/libs/db'
import bcrypt from 'bcrypt'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        nocontrol: { label: "nocontrol", type: "text", placeholder: "201064080" },
        contra: { label: "contra", type: "contra", placeholder: "****" },
      },
      async authorize(credentials, req) {
        console.log(credentials)

        const userFound = await db.user.findUnique({
            where: {
              nocontrol: credentials.nocontrol
            }
        })

        if (!userFound) throw new Error('No se encontro el usuario')

        console.log(userFound)

        const matchPassword = await bcrypt.compare(credentials.contra, userFound.contra)

        if (!matchPassword) throw new Error('Contraseña Erronea')

        return {
            id: userFound.id,
            name: userFound.nocontrol,
            nocontrol: userFound.nocontrol,
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    secret:process.env.NEXTAUTH_SECRET
  }
};

const handler = NextAuth(authOptions);

// metodos configurados de redireccion
export { handler as GET, handler as POST };
