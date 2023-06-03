import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { store } from "./store/index";
import PostsContainer from "./containers/Posts/Posts";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import PageContainer from "./containers/Page/Page";
import PostContainer from "./containers/Post/Post";
import Layout from "./layout/Layout";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<PostsContainer />} />
            <Route path="/posts/:pageIndex" element={<PostsContainer />} />
            <Route path="/page/:slug" element={<PageContainer />} />
            <Route path="/post/:slug" element={<PostContainer />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
