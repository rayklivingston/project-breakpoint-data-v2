import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"

export default async function auth(req, res) {
    return await NextAuth(req, res, {
        // https://next-auth.js.org/configuration/providers
        providers: [
            EmailProvider({
                server: {
                    host: process.env.EMAIL_SERVER_HOST,
                    port: process.env.EMAIL_SERVER_PORT,
                    auth: {
                        user: process.env.EMAIL_SERVER_USER,
                        pass: process.env.EMAIL_SERVER_PASSWORD
                    }
                },
                from: process.env.EMAIL_FROM,
                maxAge: 30 * 24 * 60 * 60 // 30 days
            }),
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET
            }),
            FacebookProvider({
                clientId: process.env.FACEBOOK_CLIENT_ID,
                clientSecret: process.env.FACEBOOK_CLIENT_SECRET
            })
        ],

        // The secret should be set to a reasonably long random string.
        // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
        // a separate secret is defined explicitly for encrypting the JWT.
        secret: process.env.SECRET,

        session: {
            // Use JSON Web Tokens for session instead of database sessions.
            // This option can be used with or without a database for users/accounts.
            // Note: `jwt` is automatically set to `true` if no database is specified.
            jwt: true,

            // Seconds - How long until an idle session expires and is no longer valid.
            maxAge: 30 * 24 * 60 * 60, // 30 days

            // Seconds - Throttle how frequently to write to database to extend a session.
            // Use it to limit write operations. Set to 0 to always update the database.
            // Note: This option is ignored if using JSON Web Tokens 
            // updateAge: 24 * 60 * 60, // 24 hours
        },

        pages: {
            //signIn: '/api/auth/signin',  // Displays signin buttons
            // signOut: '/api/auth/signout', // Displays form with sign out button
            //error: '/api/auth/error', // Error code passed in query string as ?error=
            verifyRequest: '/verify-request', // Used for check email page
            // newUser: "/name-your-project" //If set new users will be directed here on first sign in
        },

        callbacks: {
            async signIn({ user, account, profile, email, credentials }) {
                // return true
                return Promise.resolve(true); 
            },
            async redirect({ url, baseUrl }) {
                return url.startsWith(baseUrl) ? url : baseUrl
            },
            async session({ session, token, user }) {
                session.user = user;
                return Promise.resolve(session); 
            },
            async jwt({ token, user, account, profile, isNewUser }) {
                user && (token.user = user)
                return Promise.resolve(token)
            }
        },

        events: {
            async signIn(message) { /* on successful sign in */ },
            async signOut(message) { /* on signout */ },
            async createUser(message) { /* user created */ },
            async updateUser(message) { /* user updated - e.g. their email was verified */ },
            async linkAccount(message) { /* account (e.g. Twitter) linked to a user */ },
            async session(message) { /* session is active */ },
            async error(message) { /* error in authentication flow */ console.log(message) }
        },

        adapter: MongoDBAdapter({
            db: (await clientPromise).db("your-database")
        }),

        // Enable debug messages in the console if you are having problems
        debug: false,
    })
}