import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  productList: [],
  cartItem: [],
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      state.productList = [...action.payload];
    },
    addCartItems: (state, action) => {
      const check = state.cartItem.some((el) => el._id === action.payload._id);
      if (check) {
        toast("Item already in cart");
      } else {
        toast("Item Added");
        const total = action.payload.price;

        state.cartItem = [
          ...state.cartItem,
          { ...action.payload, qty: 1, total: total },
        ];
      }
    },
    deleteCartItems: (state, action) => {
      toast.success("Item Deleted");
      let index = state.cartItem.findIndex((el) => el._id === action.payload);
      state.cartItem.splice(index, 1);
    },

    increaseItem: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      const qtyInc = ++qty;
      state.cartItem[index].qty = qtyInc;
      const price = state.cartItem[index].price;

      const total = price * qtyInc;
      state.cartItem[index].total = total;
    },
    decreaseItem: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      const qtyDec = --qty;
      const price = state.cartItem[index].price;

      if (qty > 1) {
        state.cartItem[index].qty = qtyDec;
      }

      const total = price * qtyDec;
      state.cartItem[index].total = total;
    },
    productRedux: (state, action) => {
      state.products = action.payload
     
    }
  },
});

export const {
  setDataProduct,
  increaseItem,
  decreaseItem,
  addCartItems,
  productRedux,
  deleteCartItems,
} = productSlice.actions;
export default productSlice.reducer;
