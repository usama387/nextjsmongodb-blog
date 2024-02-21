import React from "react";
import Link from "next/link";


const NotFound = () => {
  return (
    <div>
      <h3>Page does not exist</h3>
      <Link href={'/'}>Return to Homepage</Link>
    </div>
  );
};

export default NotFound;
