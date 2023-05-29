export default function Footer() {
  return (
    <footer
      id="footer"
      className="site-footer"
      role="contentinfo"
      itemScope="itemscope"
      itemType="http://schema.org/WPFooter"
    >
      <div className="grid-container site-footer-inner">
        <div className="site-footer-01">
          Напишите нам:{" "}
          <a href="mailto:info@consultapp.ru">info@consultapp.ru</a>
        </div>
        <div className="site-footer-02">
          {`© 2016-${new Date().getFullYear()} consultapp.ru`}
        </div>
        <p>&nbsp;</p>
      </div>
    </footer>
  );
}
