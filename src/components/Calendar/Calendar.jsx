import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import { range } from "../../utils.js";
import Icon from "../Icon/Icon";
import styles from "./Calendar.module.css";

const WEEK_DAYS = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

function Calendar() {
  const { theme } = useContext(ThemeContext);
  const iconColor = theme === 'light' ? 950 : 50;

  return (
    <article className={`${styles[theme]} ${styles.calendar}`}>
      <nav>
        <button style={{ transform: "rotate(90deg)" }}>
          <Icon name="caretDown" type="outline" color={iconColor} />
        </button>
        <h3>September 2024</h3>
        <button style={{ transform: "rotate(-90deg)" }}>
          <Icon name="caretDown" type="outline" color={iconColor} />
        </button>
      </nav>
      <div className="content">
        <div className={styles.weekLabels}>
          {WEEK_DAYS.map((day, i) => (
            <span key={i}>{day}</span>
          ))}
        </div>
        <div className={styles.days}>
          {range(6).map((day) => (
            <span key={`prev-${day + 26}`} className={styles.previousDays}>
              {day + 26}
            </span>
          ))}
          {range(31).map((day) => (
            <span
              key={`month-${day + 1}`}
              className={`${styles.monthDays} ${day + 1 === 28 ? styles.highlighted : ""}`}
            >
              {day + 1}
            </span>
          ))}
          {range(5).map((day) => (
            <span key={`next-${day + 1}`} className={styles.nextDays}>
              {day + 1}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default Calendar;
