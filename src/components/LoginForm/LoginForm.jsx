"use client";
import React, { useEffect } from "react";
import styles from "./LoginForm.module.css";
import { useFormState } from "react-dom";
import { login } from "../../lib/actions";
import Link from "next/link";


// #1.1
const LoginForm = () => {
  // #2.1
  // useForm state hook is used to manage the state of error at beginning the state will be undefined
  const [state, formAction] = useFormState(login, 0);

  return (
    // #1.1
    <form action={formAction} className={styles.form}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
 
      <button className={styles.button}>Login</button>
      {state?.error}
      <Link href={"/register"}>
       {" Don't have an Account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
