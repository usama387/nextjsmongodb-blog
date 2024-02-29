import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectToDb } from "./utils";
import { User } from "./models";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { authConfig } from "./authConfig";

// #4.1 A function that checks the user in the db through credentials if username doesn't exist it returns error otherwise compares the password with the encrypted one in the db if wrong it returns error otherwise returns the user
const login = async (credentials) => {
  try {
    //connecting to db
    connectToDb();

    //finds the username entered in credentials
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("Wrong credentials!");

    // It checks the password from user matches the one in db
    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

// #1.1 A function that implements authentication through github taking two variables generated from github account the handlers are endpoints used in api folder
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // #3.1 Here i will tell this auth library that i am connected with mongodb and hashed my password
    CredentialsProvider({
      // #4.1 Utilizing above created function here
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  //#2.1 the callback provides user info the function checks if user is from Github then it connects to DB and checks if user already exists in db by checking it from email if not it creates the user in the db
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(user, account, profile);
      if (account.provider === "github") {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile.email });
          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });
            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
    //  #5.1 to prevent overriding and execute following config
    ...authConfig.callbacks,
  },
});
