import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider.jsx';

import Icon from '../../components/Icon/Icon.jsx';

import styles from "./Footer.module.css";

function Footer() {
  const {theme, iconStyle} = useContext(ThemeContext);

  return (
    <footer className={`${styles[theme]} ${styles.footer}`}>
      <div className={styles.wrapper}>
        <div className={styles.meshTitle}>
          <div>
            <object data="/inputs-title.svg"></object>
          </div>
          <address rel="author" className={styles.authorTag}>
            by Yaxche Manrique
          </address>
        </div>
        <ul>
          <li>
            <a href="https://github.com/yaxchemanrique/" target="_blank">
              <Icon name='github' type={iconStyle} color={50}/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/yaxchemanrique/" target="_blank">
              <Icon name='instagram' type={iconStyle} color={50} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
