import React from "react";
import styles from "./SinglePost.module.css";
import Image from "next/image";

const SinglePostPage = () => {
  return (
    // #1.1 Parent div
    <div className={styles.container}>
      {/* #1.1 Image Container */}
      <div className={styles.imageContainer}>
        <Image src="/blog.jpg" alt="blog-image" fill className={styles.image} />
      </div>
      {/* #2.1 Text Container */}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Desc</p>
        {/* #2.1 Details div */}
        <div className={styles.details}>
          <Image
            src="/myPic.jpg"
            alt="author-image"
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Usama Razaaq</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>Feb-2024</span>
          </div>
        </div>
        {/* #2.2 Content Div */}
        <div className={styles.content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          atque.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;


