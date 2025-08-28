import {configureStore} from "@reduxjs/toolkit";
import balance from "../features/account/balanceSlice";
import quote from "../features/quote/quoteSlice";


export const store = configureStore({
    reducer: {
        balance,
        quote
    },

})