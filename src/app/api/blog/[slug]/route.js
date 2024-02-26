import { connectToDb } from "../../../../lib/utils";
import { Post } from "../../../../lib/models";
import { NextResponse } from "next/server";

// #1.1 A GET request to fetch data from mongodb but this time we also use params since it a request to mongodb for single post
export const GET = async (request, { params }) => {
  // #1.1 destructuring slug from params
  const { slug } = params;

  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Post!");
  }
};

// #2.1 Its a DELETE request for deleting a post in this function the post is being removed so that i do not return any JSON data but a string indicating success and await Post.deleteOne method which takes slug to identify post.

export const DELETE = async (request, { params }) => {
  // #1.1 destructuring slug from params
  const { slug } = params;

  try {
    connectToDb();
    await Post.deleteOne({ slug });
    return NextResponse.json("Post deleted Successfully");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete Post!");
  }
};

// To delete a post i will have to in its api end point and use this methods
// ,{method: "DELETE"}

