"use client";
import React, { useEffect } from "react";
import styles from "./RegisterForm.module.css";
import { useFormState } from "react-dom";
import { register } from "../../lib/actions";
import { useRouter } from "next/navigation";
import Link from "next/link";

// #1.1
const RegisterForm = () => {
  // #2.1
  // useForm state hook is used to manage the state of error at beginning the state will be undefined
  const [state, formAction] = useFormState(register, 0);

  //#3.1 Redirects the user on login page after success
  const router = useRouter();
  //   #4.1 Executes the router with 2 dependencies and pushes user on login page
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    // #1.1
    <form action={formAction} className={styles.form}>
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="confirm password"
        name="passwordRepeat"
      />
      <button className={styles.button}>Register</button>
      {state?.error}
      <Link href={"/login"}>
        Have an Account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
