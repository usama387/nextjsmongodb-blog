import { connectToDb } from "./utils";
import { Post, User } from "./models";
import { unstable_noStore as noStore } from "next/cache";

// #1.1 An async function that fetches all posts from database
export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting posts!");
  }
};

// #2.1  A function to create a single post in the database if it does not exist
export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({slug});
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting post!");
  }
};

// #3.1 An async function to create a user in the database if it does not exist
export const getUser = async (id) => {
  // #4.1 Disabling caching
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting user!");
  }
};


// #3.1 An async function that fetches all users in the database if they exist
export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting users!");
  }
};
