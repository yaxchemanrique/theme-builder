import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

import Icon from "../Icon/Icon";

import styles from "./SignInForm.module.css";

function SignInForm() {
  const { theme, iconStyle } = useContext(ThemeContext);

  return (
    <form className={`${styles[theme]} ${styles.signInForm}`}>
      <div className={styles.fromTitle}>
        <Icon type={iconStyle} theme={theme} name="lock" />
        <p>Log In</p>
      </div>
      <div className={styles.inputsContainer}>
        <input type="email" id="sign-in-form-email" placeholder="email" />
        <input type="password" id="sign-in-form-password" placeholder="password" />
        <button>Log In</button>
      </div>
    </form>
  );
}

export default SignInForm;
