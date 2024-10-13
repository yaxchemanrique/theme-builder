import styles from './DashboardSidebar.module.css'
import SidebarLink from '../SidebarLink/SidebarLink.jsx'

function DashboardSidebar({settings}) {
  const theme = settings.theme;

  return (
    <aside className={`${styles.dashboardSidebar} ${styles[`theme-${theme}`]}`}>
      <div className={styles.profileInfoContainer}>
        <img src="./src/assets/violet-profile-picture.svg" alt="Violet Windler" />
        <div className={styles.profileInfo}>
          <p className={styles.profileName}>Violet Windler</p>
          <p className={styles.profileEmail}>violet@email.com</p>
        </div>
      </div>
        <section className={styles.sidebarSection}>
          <p className={styles.sectionTitle}>main</p>
          <div className="sidebarLinkContainer">
            <SidebarLink settings={settings} icon='home'>Dashboard</SidebarLink>
          </div>
        </section>
        <section className={styles.sidebarSection}>
          <p className={styles.sectionTitle}>app</p>
          <div className="sidebarLinkContainer">
            <SidebarLink settings={settings} icon='calendar'>Calendar</SidebarLink>
            <SidebarLink settings={settings} icon='messageBubble'>Messages</SidebarLink>
            <SidebarLink selected={true} settings={settings} icon='envelope'>Email</SidebarLink>
            <SidebarLink settings={settings} icon='user'>Users</SidebarLink>
          </div>
        </section>
        <section className={styles.sidebarSection}>
          <p className={styles.sectionTitle}>help</p>
          <div className="sidebarLinkContainer">
            <SidebarLink settings={settings} icon='bookOpen'>Knowledge Base</SidebarLink>
            <SidebarLink settings={settings} icon='settings'>Settings</SidebarLink>
          </div>
        </section>
    </aside>
  )
}

export default DashboardSidebar