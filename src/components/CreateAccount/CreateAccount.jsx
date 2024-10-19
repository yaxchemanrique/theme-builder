import {useContext} from "react";
import { ThemeContext } from "../../context/ThemeProvider";

import Icon from "../Icon/Icon";

import styles from './CreateAccount.module.css'

function CreateAccount() {
  const { theme, iconStyle } = useContext(ThemeContext);

  return (
    <div className={`${styles[theme]} ${styles.createAccount}`}>
      <header>
        <h2>Create an account</h2>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </header>
      <div className={styles.content}>
        <div className={styles.sso}>
          <a href="#">
            <Icon name='google' theme='light' type={iconStyle}/>
            <span>Google</span>
          </a>
          <a href="#">
            <Icon name='github' theme='light' type={iconStyle}/>
            <span>Github</span>
          </a>
        </div>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="">Email</label>
            <input placeholder="jane@email.com" type="email" name="" id="" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="">Password</label>
            <input placeholder="••••••••" type="password" name="" id="" />
          </div>
          <button className={styles.ctaButton} onClick={(e) => e.preventDefault()}>Create account</button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
