import { Link } from "react-router-dom";
import MenuContainer from "../../containers/Menu/Menu";

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
            <MenuContainer />
          </div>
        </div>
      </div>
    </header>
  );
}
