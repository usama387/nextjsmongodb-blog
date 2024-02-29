import React from "react";
import styles from "./AdminPosts.module.css";
import {getPosts} from "../../lib/data";
import Image from "next/image";
import { deletePost } from "../../lib/actions";

const AdminPosts = async () => {
  // #1.2 fetching posts
  const posts = await getPosts();

  return (
    // #1.1 Having main container mapping the post with detail of image and title
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.detail}>
            <Image
              src={post.img || "/noavatar.png"}
              alt="post image"
              width={50}
              height={50}
            />
            <span className={styles.postTitle}>{post.title}</span>
          </div>
          {/* creating form here to delete a post by passing post id coming from map function*/}
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className={styles.postButton}>Delete Post</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
