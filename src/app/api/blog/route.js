import { connectToDb } from "../../../lib/utils";
import { Post } from "../../../lib/models";
import { NextResponse } from "next/server";

// #1.1 A GET request to fetch data from mongodb
export const GET = async (request) => {
  try {
    connectToDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Posts!");
  }
};
