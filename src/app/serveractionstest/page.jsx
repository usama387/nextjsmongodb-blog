import React from "react";
import { addPost, deletePost } from "../../lib/actions";

// #1.1 Form that sends prop to action.js file to create a post
const ServerActionsTestPage = () => {
  return (
    // #1.1 Parent div of all forms
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button>Create Post</button>
      </form>
      <form action={deletePost}>
        <input type="text" placeholder="postId" name="id"/>
        <button>Delete Post</button>
      </form>
    </div>
  );
};

export default ServerActionsTestPage;
