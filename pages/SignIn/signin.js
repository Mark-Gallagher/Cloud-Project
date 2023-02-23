import styles from "./layout.module.css";
import * as React from "react";

export default function SignInPage() {
  return (
    <>
      <div className={styles.container}>
        <SignIn />
        {children}
      </div>
    </>
  );
}
