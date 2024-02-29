import React, { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPosts from "../../components/AdminPosts/AdminPosts";
import AdminPostForm from "../../components/AdminPostForm/AdminPostForm";
import AdminUsers from "../../components/AdminUsers/AdminUsers";
import AdminUserForm from "../../components/AdminUserForm/AdminUserForm";
import { auth } from "../../lib/auth";

const AdminPage = async () => {
  // #4.1calling my auth function to destructure userId which is inside session and i will pass it to Admin post and user Form as a prop create posts
  const session = await auth();

  return (
    //#1.1 Main Container
    <div className={styles.container}>
      {/* #2.1 First Row which has 2 columns*/}
      <div className={styles.row}>
        {/* First Columns */}
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>

        {/* Second Column */}
        <div className={styles.col}>
          <AdminPostForm userId={session.user.id} />
        </div>
      </div>

      {/* #3.1 Second Row which has 2 columns*/}
      <div className={styles.row}>
        {/* First Columns */}
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>

        {/* Second Column */}
        <div className={styles.col}>
          <AdminUserForm/>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
