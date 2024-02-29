"use client";
import { useFormState } from "react-dom";
import styles from "./AdminUserForm.module.css";
import { addUser } from "../../lib/actions";

// #1.1
const AdminPostForm = () => {
  // this hook fires the action and is connected with action to return current state message if there is a error
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form className={styles.container} action={formAction}>
      <h1>Add new User</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="text" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="email" />
      <input type="text" placeholder="img" name="img" />
      <select name="isAdmin">
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button>Add User</button>
      {state && state.error}
    </form>
  );
};

export default AdminPostForm;
