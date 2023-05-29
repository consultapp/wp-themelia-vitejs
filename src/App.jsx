import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import PostsContainer from "./containers/Posts/Posts";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import { store } from "./store/index";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route index element={<PostsContainer />} />
            <Route path="/page/:pageIndex/" element={<PostsContainer />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

{
  /* <Route path="restaurants" element={<RestaurantsPage />} />
<Route
  path="restaurants/:restaurantId"
  element={<RestaurantPage />}
/>
<Route
  path="restaurants/:restaurantId/menu"
  element={<RestaurantMenuPage />}
/>
<Route
  path="restaurants/:restaurantId/reviews"
  element={<RestaurantReviewsPage />}
/>
<Route path="contacts/about-us" element={<AboutUsPage />} />
<Route path="contacts/addresses" element={<AddressesPage />} />
<Route path="cart" element={<CartPage />} /> */
}
