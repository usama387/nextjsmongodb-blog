"use server";
// since i am using server actions in all functions of the file so i will declare it at the top
import { connectToDb } from "./utils";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";


// # 1.1 key note using server actions the function has to be async

// #2.1 A function that adds new Post in my db using from data as Prop

export const addPost = async (prevState, formData) => {
  
  //  #2.1 destructuring them at once
  const { title, desc, slug, userId } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    // # saves new post in the database
    await newPost.save();
    console.log("Saved to db");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

// #8.1 A user is being created function will be utilized in admin page
export const addUser = async (prevState,formData) => {
  
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });
    // #3.1 saves new post in the database
    await newUser.save();
    console.log("Saved to db");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

// #4.1 This async function deletes the Post from db using server actions and id coming here from admin posts component 
export const deletePost = async (formData) => {

  //  #2.1 This time i only need to destructure post id to delete a post from db
  const { id } = Object.fromEntries(formData);
  // #3.1 connecting to mongodb to creating post using Post model and its objects
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    // #3.1 deletes the post in the database
    console.log("Deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

// #9.1 A user is being deleted function is used in admin page
export const deleteUser = async (formData) => {
  
  const { id } = Object.fromEntries(formData);
 
  try {
    connectToDb();
    // deleting both user and it's posts
    await Post.deleteMany({userId:id})
    await User.findByIdAndDelete(id);
    console.log("Deleted from db");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

// #4.1This server action function handles login is being used in login page
export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

// #4.1This server action function handles logout is being used in NAvbar's sub-component link
export const handleLogout = async () => {
  "use server";
  await signOut();
};

// #5.1 This server action registers the user and is being utilized in the register page using fromData but first it checks if passwords entered match then it checks by username if it exists it says user already exits if not then it creates in the db
export const register = async (previousState,formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });
    if (user) {
      return { error: "User already exists" };
    }

    // #6.1 Installed bcrypt from npm and Encrypting the user given password
    const salt = await bcrypt.genSalt(10);
    // #6.1 The hashed password will be passed to DB
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("User saved to db");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

// #7.1 This server action implements login through user credentials and is being utilized in login page and its connected with auth js file 
export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};
