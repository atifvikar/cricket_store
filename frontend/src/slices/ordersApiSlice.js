import { apiSlice } from "./apiSlice";
import { ORDERSS_URL } from "../constants/apiPaths";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDERSS_URL,
        method: "POST",
        body: { ...order },
      }),
    }),
    getOrders: builder.mutation({
      query: (userId) => ({
        url: `${ORDERSS_URL}/${userId}`,
      }),
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrdersMutation } = orderApiSlice;
