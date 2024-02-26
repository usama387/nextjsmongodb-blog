import React from "react";
import styles from "./blog.module.css";
import PostCard from "../../components/PostCard/PostCard";
// import { getPosts } from "../../lib/data";

// #3.1 Fetching posts data with an api end point 
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });
  if(!res.ok){
    throw new Error("Something went wrong!");
  }

  return res.json();
};

// #1 Main outer function to fetch and map posts
const BlogPage = async () => {

  // The api end point is being used here to await posts here
  const posts = await getData();

  // // #2 Getting posts from async function in data.js file without an api
  // const posts = await getPosts();

  return (
    // #1 Main parent div
    <div className={styles.container}>
      {/* #1.1 Mapping the posts */}
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          {/* pass each post as a prop in component */}
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
