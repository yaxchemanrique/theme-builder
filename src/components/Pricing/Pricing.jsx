import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import Icon from "../Icon/Icon";
import styles from "./Pricing.module.css";

function Pricing() {
  const { theme, iconStyle } = useContext(ThemeContext);
  const iconColor = theme === 'light' ? 700 : 500;

  return (
    <article className={`${styles[theme]} ${styles.pricing}`}>
      <header>
        <h2>Plans & Pricing</h2>
        <p>Lorem, ipsum dolor sit amet consectetur.</p>
      </header>
      <div className={styles.content}>
        <section>
          <div className={styles.description}>
            <h3>Basic</h3>
            <ul>
              <li>
                <Icon color={iconColor} type={iconStyle} theme={theme} name="check" />
                <span>Mollis fringilla viverra</span>
              </li>
              <li>
                <Icon color={iconColor} type={iconStyle} theme={theme} name="check" />
                <span>Habitant dis ultricies</span>
              </li>
              <li>
                <Icon color={iconColor} type={iconStyle} theme={theme} name="check" />
                <span>Tristique non facilisi</span>
              </li>
            </ul>
          </div>
          <a href="#">Get Started</a>
        </section>
        <section className={styles.accent}>
          <div className={styles.description}>
            <h3>Pro</h3>
            <ul>
              <li>
                <Icon color={iconColor} type={iconStyle} theme={theme} name="check" />
                <span>Mollis fringilla viverra</span>
              </li>
              <li>
                <Icon color={iconColor} type={iconStyle} theme={theme} name="check" />
                <span>Habitant dis ultricies</span>
              </li>
              <li>
                <Icon color={iconColor} type={iconStyle} theme={theme} name="check" />
                <span>Tristique non facilisi</span>
              </li>
              <li>
                <Icon color={iconColor} type={iconStyle} theme={theme} name="check" />
                <span>Sed malesuada vitae</span>
              </li>
              <li>
                <Icon color={iconColor} type={iconStyle} theme={theme} name="check" />
                <span>Tempus lorem turpis</span>
              </li>
            </ul>
          </div>
          <a href="#">Get Started</a>
        </section>
        <section>
          <div className={styles.description}>
            <h3>Basic</h3>
            <ul>
              <li>
                <Icon color={iconColor} type={iconStyle} theme={theme} name="check" />
                <span>Mollis fringilla viverra</span>
              </li>
              <li>
                <Icon color={iconColor} type={iconStyle} theme={theme} name="check" />
                <span>Habitant dis ultricies</span>
              </li>
              <li>
                <Icon color={iconColor} type={iconStyle} theme={theme} name="check" />
                <span>Tristique non facilisi</span>
              </li>
              <li>
                <Icon color={iconColor} type={iconStyle} theme={theme} name="check" />
                <span>Sed malesuada vitae</span>
              </li>
              <li>
                <Icon color={iconColor} type={iconStyle} theme={theme} name="check" />
                <span>Tempus lorem turpis</span>
              </li>
              <li>
                <Icon color={iconColor} type={iconStyle} theme={theme} name="check" />
                <span>Mauris sit convallis</span>
              </li>
              <li>
                <Icon color={iconColor} type={iconStyle} theme={theme} name="check" />
                <span>Imperdiet odio id viverra</span>
              </li>
            </ul>
          </div>
          <a href="#">Get Started</a>
        </section>
      </div>
    </article>
  );
}

export default Pricing;
