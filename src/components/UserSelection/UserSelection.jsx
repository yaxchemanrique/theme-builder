import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider.jsx";

import Icon from "../Icon/Icon.jsx";

import styles from "./UserSelection.module.css"

function UserSelection() {
  const { theme, iconStyle } = useContext(ThemeContext);

  return (
    <div className={`${styles[theme]} ${styles.userSelection}`}>
      <div className={styles.buttonSelection}>
        <p>Select User</p>
        <Icon type={iconStyle} theme={theme} name="caretDown"/>
      </div>
      <ul className={styles.usersList}>
        <li className={styles.user}>
          {/* <img src="" alt="" /> */}
          <div className={styles.userProfilePic}></div>
          <div className={styles.userInfo}>
            <p className={styles.userName}>Flora Beer</p>
            <p className={styles.userEmail}>flora@email.com</p>
          </div>
        </li>
        <li className={styles.user}>
          {/* <img src="" alt="" /> */}
          <div className={styles.userProfilePic}></div>
          <div className={styles.userInfo}>
            <p className={styles.userName}>Dawn O'Keefe</p>
            <p className={styles.userEmail}>dawn@email.com</p>
          </div>
        </li>
        <li className={styles.user}>
          {/* <img src="" alt="" /> */}
          <div className={styles.userProfilePic}></div>
          <div className={styles.userInfo}>
            <p className={styles.userName}>Michael Marvin</p>
            <p className={styles.userEmail}>michael@email.com</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default UserSelection;
