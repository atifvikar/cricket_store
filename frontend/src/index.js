import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./assets/styles/index.css";
import "./assets/styles/bootstrap.custom.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import LoginScreen from "./screens/LoginScreen";
import CartScreen from "./screens/CartScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PrivateRoute from "./components/PrivateRoute";
import OrderScreen from "./screens/OrderScreen";
import { paths } from "./constants/paths";
import { Provider } from "react-redux";
import store from "./store";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path={paths.HOME_SCREEN} element={<HomeScreen />} />
      <Route
        index={true}
        path={paths.PRODUCT_SCREEN}
        element={<ProductScreen />}
      />
      <Route index={true} path={paths.LOGIN_SCREEN} element={<LoginScreen />} />
      <Route index={true} path={paths.CART_SCREEN} element={<CartScreen />} />
      <Route
        index={true}
        path={paths.REGISTER_SCREEN}
        element={<RegisterScreen />}
      />
      <Route path="" element={<PrivateRoute />}>
        <Route
          index={true}
          path={paths.SHIPPING_SCREEN}
          S
          element={<ShippingScreen />}
        />
        <Route
          index={true}
          path={paths.PAYMENT_SCREEN}
          element={<PaymentScreen />}
        />
        <Route
          index={true}
          path={paths.PLACEORDER_SCREEN}
          element={<PlaceOrderScreen />}
        />
        <Route
          index={true}
          path={`${paths.ORDER_SCREEN}/:id`}
          element={<OrderScreen />}
        />
      </Route>
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
