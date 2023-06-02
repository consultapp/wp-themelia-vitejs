import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { store } from "./store/index";
import MainLayout from "./layout/MainLayout";
import PostsContainer from "./containers/Posts/Posts";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import PostBySlugContainer from "./containers/PostBySlug/PostBySlug";
import PageContainer from "./containers/Page/Page";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route index element={<PostsContainer />} />
            <Route path="/page/:slug" element={<PageContainer />} />
            <Route path="/posts/:pageIndex" element={<PostsContainer />} />
            <Route
              path="/post/:slug"
              element={<PostBySlugContainer loadFull={true} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
