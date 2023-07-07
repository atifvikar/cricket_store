const product = "/product";

const paths = Object.freeze({
  HOME_SCREEN: "/",
  PRODUCT_SCREEN: `${product}/:id`,
  PRODUCT_PATH: product,
  LOGIN_SCREEN: "/login",
  CART_SCREEN: "/cart",
  REGISTER_SCREEN: "/register",
  SHIPPING_SCREEN: "/shipping",
  PAYMENT_SCREEN: "/payment",
  PLACEORDER_SCREEN: "/placeorder",
  PROFILE_SCREEN: "/profile",
  ORDER_SCREEN: "/order",
});

export { paths };
