"use client";
import { authenticate } from "../../../lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="사용자명" name="username" />
      <input type="password" placeholder="패스워드" name="password" />
      <button>Login</button>
      {state && state}
    </form>
  );
};

export default LoginForm;
