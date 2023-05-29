import About from "../Plugins/About";

export default function Sidebar() {
  return (
    <aside
      className="sidebar sidebar-primary grid-30 tablet-grid-33"
      role="complementary"
      id="sidebar-primary"
      aria-label="Primary Sidebar"
      itemScope="itemscope"
      itemType="http://schema.org/WPSideBar"
    >
      <h3
        id="sidebar-primary-title"
        className="screen-reader-text font-headlines"
      >
        Primary Sidebar
      </h3>
      <About />

      <div className="sidebar-inner"></div>
    </aside>
  );
}
