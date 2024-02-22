import React from "react";
import styles from "./PostCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    // #1 Parent Div
    <div className={styles.container}>
      {/* #1.1 Top Div */}
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image
            src="/blog.jpg"
            alt="blog-image"
            fill
            className={styles.image}
          />
        </div>
        <span className={styles.date}>JAN 2024</span>
      </div>
      {/* #2 Bottom div */}
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          minima.
        </p>
        <Link className={styles.link} href={"/blog/post"}>Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
