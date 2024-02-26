import React from "react";
import styles from "./PostUser.module.css";
import { getUser } from "../../lib/data";
import Image from "next/image";

const PostUser = async ({ userId }) => {
  //#2.1 fetching user without an api
  const user = await getUser(userId);
  return (
    // #1.1main outer div
    <div className={styles.container}>
 {     <Image
        src={user.img? user.img :"/noavatar.png"}
        alt="author-image"
        width={50}
        height={50}
        className={styles.avatar}
      />}
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
