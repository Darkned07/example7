import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProduct: JSON.parse(localStorage.getItem("all")) || [],
  total: JSON.parse(localStorage.getItem("total")) || 0,
  price: JSON.parse(localStorage.getItem("price")) || 0,
  shops: JSON.parse(localStorage.getItem("shops")) || [],
  filters: JSON.parse(localStorage.getItem("fils")) || [],
  idFil: JSON.parse(localStorage.getItem("id")) || [],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    api: (state, { payload }) => {
      const docs = payload.map((s) => {
        return { ...s, amount: 1 };
      });
      state.shops = docs;
      localStorage.setItem("shops", JSON.stringify(state.shops));
    },
    filter: (state, { payload }) => {
      const fils = state.shops.filter((s) => {
        return s.category === payload;
      });
      state.filters = fils;
      localStorage.setItem("fils", JSON.stringify(state.filters));
    },
    filterId: (state, { payload }) => {
      const fils = state.filters.filter((s) => s.id === payload);
      state.idFil = fils;
      localStorage.setItem("id", JSON.stringify(state.idFil));
    },
    filterSlug: (state, { payload }) => {
      const fils = state.shops.filter((s) => s.slug === payload);
      state.idFil = fils;
      localStorage.setItem("id", JSON.stringify(fils));
    },
    addCart: (state, { payload }) => {
      const st = state.allProduct.find((s) => s.id === payload.id);
      if (st) {
        st.amount += 1;
        state.total -= 1;
      } else {
        state.allProduct = [...state.allProduct, payload];
        state.total += 1;
      }
      shopSlice.caseReducers.allTotal(state);
      localStorage.setItem("all", JSON.stringify(state.allProduct));
    },
    incrementShop: (state, { payload }) => {
      const st = state.idFil.find((s) => s.id === payload);
      if (st && st.amount > 1) {
        st.amount -= 1;
        state.total -= 1;
      }
      localStorage.setItem("shops", JSON.stringify(state.shops));
      localStorage.setItem("id", JSON.stringify(st));
      localStorage.setItem("all", JSON.stringify(state.allProduct));
      localStorage.setItem("fils", JSON.stringify(state.filters));
    },
    decrementShop: (state, { payload }) => {
      const item = state.idFil.find((s) => s.id === payload);
      if (item) {
        item.amount += 1;
        state.total += 1;
      }
      localStorage.setItem("shops", JSON.stringify(state.shops));
      localStorage.setItem("id", JSON.stringify(item));
      localStorage.setItem("fils", JSON.stringify(state.filters));
      localStorage.setItem("all", JSON.stringify(state.allProduct));
    },
    incrAll: (state, { payload }) => {
      const inAll = state.allProduct.find((s) => s.id === payload);
      if (inAll) {
        state.total -= 1;
        inAll.amount -= 1;
      }
      shopSlice.caseReducers.allTotal(state);
      localStorage.setItem("all", JSON.stringify(state.allProduct));
    },
    decrAll: (state, { payload }) => {
      const decAll = state.allProduct.find((s) => s.id === payload);
      if (decAll) {
        state.total += 1;
        decAll.amount += 1;
      }

      shopSlice.caseReducers.allTotal(state);
      localStorage.setItem("all", JSON.stringify(state.allProduct));
    },
    allTotal: (state) => {
      let allPrices = 0;
      let selectedProds = 0;
      state.allProduct.forEach((prod) => {
        allPrices += prod.amount * prod.price;
        selectedProds += prod.amount;
      });
      state.price = allPrices;
      state.total = selectedProds;
      localStorage.setItem("all", JSON.stringify(state.allProduct));
    },

    deletedShops: (state, { payload }) => {
      const del = state.allProduct.filter((s) => s.id !== payload);
      state.allProduct = del;
      shopSlice.caseReducers.allTotal(state);
      localStorage.setItem("all", JSON.stringify(state.allProduct));
    },
    delAll: (state, { payload }) => {
      state.allProduct = [];
      shopSlice.caseReducers.allTotal(state);
      localStorage.removeItem("all");
    },
  },
});

export default shopSlice.reducer;
export const {
  incrementShop,
  decrementShop,
  addCart,
  allTotal,
  deletedShops,
  api,
  filter,
  filterId,
  filterSlug,
  incrAll,
  decrAll,
  delAll,
} = shopSlice.actions;
