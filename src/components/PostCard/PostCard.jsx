import React from "react";
import styles from "./PostCard.module.css";
import Image from "next/image";
import Link from "next/link";

// #3.1 accessing post as prop from blog page
const PostCard = ({ post }) => {
  return (
    // #1 Parent Div
    <div className={styles.container}>
      {/* #1.1 Top Div */}
      <div className={styles.top}>
      {post?.img && <div className={styles.imageContainer}>
          <Image
            src={post.img}
            alt="blog-image"
            fill
            className={styles.image}
          />
        </div>}
      </div>
      {/* #2 Bottom div */}
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post?.title}</h1>
        <p className={styles.desc}>{post?.body}</p>
        <Link className={styles.link} href={`/blog/${post?.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
