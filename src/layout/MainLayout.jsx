import HeaderContainer from "../containers/Header/Header";
import FooterContainer from "../containers/Footer/Footer";
import WorkareaContainer from "../containers/Workarea/Workarea";
import { Provider } from "react-redux";
import { store } from "../store";

export default function MainLayout() {
  return (
    <>
      <Provider store={store}>
        <HeaderContainer />
        <WorkareaContainer />
        <FooterContainer />
      </Provider>
    </>
  );
}
