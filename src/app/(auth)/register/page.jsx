import styles from "./register.module.css";
import RegisterForm from "../../../components/RegisterForm/RegisterForm";

// #1.1 
const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* #2.1 */}
        {/* This component is client rendered */}
        <RegisterForm />
      </div>
    </div>
  );
};

// 3:54:38

export default RegisterPage;
