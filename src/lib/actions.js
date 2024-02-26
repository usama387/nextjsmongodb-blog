"use server"
// since i am using server actions in all functions of the file so i will declare it at the top
import { connectToDb } from "./utils";
import { Post } from "./models";

// # 1.1 key note using server actions the function has to be async
// #2.1 A function that adds new Post in my db using from data as Prop
export const addPost = async (formData) => {
//   "use server";
  // after this directive whatever i do will run on server

  //  #2.1 destructuring them at once
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  // #3.1 connecting to mongodb to creating post using Post model and its objects
  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    // #3.1 saves new post in the database
    await newPost.save();
    console.log("Saved to db");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

// #4.1 This async function deletes the Post from db using server actions
export const deletePost = async (formData) => {
//   "use server";

  //  #2.1 This time i only need to destructure post id to delete a post from db
  const { id } = Object.fromEntries(formData);
  // #3.1 connecting to mongodb to creating post using Post model and its objects
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    // #3.1 deletes the post in the database
    await newPost.save();
    console.log("Deleted from db");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
