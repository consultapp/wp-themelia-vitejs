import HeaderContainer from "../containers/Header/Header";
import FooterContainer from "../containers/Footer/Footer";
import Workarea from "../components/Workarea/Workarea";

export default function MainLayout({ children }) {
  return (
    <>
      <HeaderContainer />
      <Workarea>{children}</Workarea>
      <FooterContainer />
    </>
  );
}
