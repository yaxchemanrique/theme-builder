import styles from './DashboardSidebar.module.css'
import SidebarLink from '../SidebarLink/SidebarLink.jsx'

function DashboardSidebar({settings}) {
  return (
    <aside className={styles.dashboardSidebar}>
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
            <SidebarLink iconType={settings.iconStyle} icon='home'>Dashboard</SidebarLink>
          </div>
        </section>
        <section className={styles.sidebarSection}>
          <p className={styles.sectionTitle}>app</p>
          <div className="sidebarLinkContainer">
            <SidebarLink iconType={settings.iconStyle} icon='calendar'>Calendar</SidebarLink>
            <SidebarLink iconType={settings.iconStyle} icon='messageBubble'>Messages</SidebarLink>
            <SidebarLink selected={true} iconType={settings.iconStyle} icon='envelope'>Email</SidebarLink>
            <SidebarLink iconType={settings.iconStyle} icon='user'>Users</SidebarLink>
          </div>
        </section>
        <section className={styles.sidebarSection}>
          <p className={styles.sectionTitle}>help</p>
          <div className="sidebarLinkContainer">
            <SidebarLink iconType={settings.iconStyle} icon='bookOpen'>Knowledge Base</SidebarLink>
            <SidebarLink iconType={settings.iconStyle} icon='settings'>Settings</SidebarLink>
          </div>
        </section>
    </aside>
  )
}

export default DashboardSidebar