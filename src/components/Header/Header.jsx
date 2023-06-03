import { Link } from "react-router-dom";
import styles from "./style.module.scss";

export default function Header() {
  return (
    <header
      id="header"
      className="site-header"
      role="banner"
      itemScope="itemScope"
      itemType="http://schema.org/WPHeader"
    >
      <div id="branding" className="site-branding grid-container">
        <div id="access" className="site-access grid-100">
          <div id="access-inner" className="access-inner relative">
            <Link to="/" className="site-title-wrap clearfix">
              <div className="branding-item-wrap flex-center">
                <div className="titles-wrap branding-item">
                  <h1
                    id="site-title"
                    className="site-title"
                    itemProp="headline"
                  >
                    ConsultApp.ru
                  </h1>
                  <p
                    id="site-description"
                    className="site-description font-primary"
                    itemProp="description"
                  >
                    Автоматизация бизнес-процессов, сопровождение информационных
                    систем
                  </p>
                </div>
              </div>
            </Link>
            <nav
              className="menu menu-primary font-secondary"
              role="navigation"
              id="menu-primary"
              aria-label="Primary Menu"
              itemScope="itemScope"
              itemType="http://schema.org/SiteNavigationElement"
            >
              <button
                id="menu-toggle"
                className={`menu-toggle hamburger hamburger--spin main-menu-btn is-not-active font-secondary ${styles.buttonHamburger}`}
                type="button"
                aria-controls="menu-primary-items"
                aria-expanded="false"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
                <span className="screen-reader-text">Menu</span>
              </button>
              <ul
                id="menu-primary-items"
                className="menu-primary-items menu-items sm sm-simple"
                aria-expanded="false"
                data-smartmenus-id="16853450726044512"
              >
                <li
                  id="menu-item-1530"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1530"
                >
                  <Link to="/page/projects-react-next/">React/Next</Link>
                </li>
                <li
                  id="menu-item-1106"
                  className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1106"
                >
                  <Link to="/post/simple-bot-for-telegram-php/">
                    Telegram Bots
                  </Link>
                </li>
                <li
                  id="menu-item-1105"
                  className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1105"
                >
                  <Link to="/category/stati/wordpress/%d0%bf%d0%bb%d0%b0%d0%b3%d0%b8%d0%bd%d1%8b-wp/">
                    WordPress
                  </Link>
                </li>
                <li
                  id="menu-item-657"
                  className="menu-item menu-item-type-post_type menu-item-object-post menu-item-657"
                >
                  <Link to="/page/%d1%85%d0%be%d1%81%d1%82%d0%b8%d0%bd%d0%b3/">
                    Хостинг
                  </Link>
                </li>
                <li
                  id="menu-item-857"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-857"
                >
                  <a href="mailto:info@consultapp.ru">info@consultapp.ru</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
