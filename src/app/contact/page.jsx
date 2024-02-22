import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";

const ContactPage = () => {
  return (
    // #1.1 Parent div
    <div className={styles.container}>
      {/* #1.1 Image Container */}
      <div className={styles.imageContainer}>
        <Image
          src="/contact.png"
          alt="form-image"
          fill
          className={styles.Image}
        />
      </div>

      {/* #2.1 Form Container */}
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Complete Name" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

