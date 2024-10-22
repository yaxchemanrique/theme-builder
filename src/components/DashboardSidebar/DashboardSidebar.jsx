import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider.jsx";

import profileAvatar from '../../assets/violet-profile-picture.svg'
import SidebarLink from "../SidebarLink/SidebarLink.jsx";

import styles from "./DashboardSidebar.module.css";

function DashboardSidebar() {
  const { theme } = useContext(ThemeContext);

  return (
    <aside className={`${styles.dashboardSidebar} ${styles[`theme-${theme}`]}`}>
      <div className={styles.profileInfoContainer}>
        <img
          src={profileAvatar}
          alt="Violet Windler"
        />
        <div className={styles.profileInfo}>
          <p className={styles.profileName}>Violet Windler</p>
          <p className={styles.profileEmail}>violet@email.com</p>
        </div>
      </div>
      <section className={styles.sidebarSection}>
        <p className={styles.sectionTitle}>main</p>
        <div className="sidebarLinkContainer">
          <SidebarLink iconName="home">Dashboard</SidebarLink>
        </div>
      </section>
      <section className={styles.sidebarSection}>
        <p className={styles.sectionTitle}>app</p>
        <div className="sidebarLinkContainer">
          <SidebarLink iconName="calendar">Calendar</SidebarLink>
          <SidebarLink iconName="messageBubble">Messages</SidebarLink>
          <SidebarLink selected={true} iconName="envelope">
            Email
          </SidebarLink>
          <SidebarLink iconName="user">Users</SidebarLink>
        </div>
      </section>
      <section className={styles.sidebarSection}>
        <p className={styles.sectionTitle}>help</p>
        <div className="sidebarLinkContainer">
          <SidebarLink iconName="bookOpen">Knowledge Base</SidebarLink>
          <SidebarLink iconName="settings">Settings</SidebarLink>
        </div>
      </section>
    </aside>
  );
}

export default DashboardSidebar;
