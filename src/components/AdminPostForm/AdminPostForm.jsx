"use client";
import { useFormState } from "react-dom";
import styles from "./AdminPostForm.module.css";
import { addPost } from '../../lib/actions';

const AdminPostForm = ({userId}) => {
  //  #using from state to call action and pass in the from and from the state of action i can handle errors
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <form className={styles.container} action={formAction}>
      <h1>Add new Post</h1>
      <input type="hidden" value={userId} name="userId" />
      <input type="text" placeholder="Title" name="title" />
      <input type="text" placeholder="slug" name="slug" />
      <input type="text" placeholder="img" name="img" />
      <textarea type="text" placeholder="desc" name="desc" rows={10} />
      <button>Add Post</button>
      {state && state.error}
    </form>
  )
}

export default AdminPostForm