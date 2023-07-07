import Product from "../models/productModel.js";
import Order from "../models/orderModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import generateToken from "../utils/generateToken.js";

// @desc    Create new Order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("Order Empty");
  }
  const orders = new Order({
    orderItems: orderItems.map((x) => ({
      ...x,
      product: x._id,
      _id: undefined,
    })),
    user: req.user._id,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  });

  const createOrder = await orders.save();
  res.status(200).json(createOrder);
});

// @desc    Get Order details
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: res.user._id });
  res.status(200).json(orders);
});

// @desc    Get Order details
// @route   GET /api/orders
// @access  Private / Admin
const getOrders = asyncHandler(async (req, res) => {
  res.send("get all orders");
});

// @desc    Get Order details
// @route   GET /api/orders/:id
// @access  Private / Admin
const getOrdersById = asyncHandler(async (req, res) => {
  const orders = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (order) {
    res.status(200).json(orders);
  } else {
    res.status(400);
    throw new Error("Order not found");
  }
});

//
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("update Order to paid");
});

const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("update order to be delivered");
});

export {
  addOrderItems,
  getMyOrders,
  getOrders,
  getOrdersById,
  updateOrderToPaid,
  updateOrderToDelivered,
};
