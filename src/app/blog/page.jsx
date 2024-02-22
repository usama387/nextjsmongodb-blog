import React from 'react';
import styles from "./blog.module.css";
import PostCard from "../../components/PostCard/PostCard";

const BlogPage = () => {
  return (
    // #1 Main parent div
    <div className={styles.container}>
      {/* #1 */}
      <div className={styles.post}>
      <PostCard />
      </div>
      <div className={styles.post}>
      <PostCard />
      </div>
      <div className={styles.post}>
      <PostCard />
      </div>
      
    </div>
  )
}

export default BlogPage;