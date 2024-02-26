import React, { Suspense } from "react";
import styles from "./SinglePost.module.css";
import Image from "next/image";
import PostUser from "../../../components/PostUser/PostUser";
import { getPost } from "../../../lib/data";

// #5.1 Fetching single post with an api end point
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

// # Key Note: In this page i have 2 functions fetching data but NextJs fetches data only once and pass to these 2 functions

// #4.1dynamic seo for single blog post by fetching post
export const generateMetadata = async ({ params }) => {
  // #4.1 destructuring slug from params
  const { slug } = params;

  // #4.1 fetching post without an api from data.js file
  const post = await getPost(slug);

  // #4.1 using post and slug returning title and desc for dynamic SEO
  return {
    title: post.title,
    desc: post.desc,
  };
};

// 3.1 to access slug i can simply destructure {params} in the main fun parameter
const SinglePostPage = async ({ params }) => {
  // destructuring slug from params
  const { slug } = params;

  // #4.1 fetching post without an api
  // const post = await getPost(slug);

  // #5.1 Fetching data with an api
  const post = await getData(slug);

  return (
    // #1.1 Parent div
    <div className={styles.container}>
      {/* #1.1 Image Container */}
      {post.img && (
        <div className={styles.imageContainer}>
          <Image
            src={post.img}
            alt="blog-image"
            fill
            className={styles.image}
          />
        </div>
      )}
      {/* #2.1 Text Container */}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>Desc</p>
        {/* #2.1 Details div */}
        <div className={styles.details}>
          {/* #2.1 Contains author details by passing userId as props coming from api */}
          {post && (
            <Suspense fallback={<div>loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}> Published </span>
            <span className={styles.detailValue}>
              {post.createdAt.toString()}
            </span>
          </div>
        </div>
        {/* #2.2 Content Div */}
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
