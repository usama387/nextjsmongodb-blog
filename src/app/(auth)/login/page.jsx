import React from "react";
import { handleGithubLogin } from "../../../lib/actions";
import LoginForm from "../../../components/LoginForm/LoginForm";
import styles from "./login.module.css"

// #2.1 function that implements login and invoked in form
const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* #1.1  Log in with Github using form */}
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login With Github</button>
        </form>
        {/* #2.1 */}
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
