import { configureStore } from "@reduxjs/toolkit";
import earringsReducer from "./slices/earringsSlice";
import earringFooterReducer from "./slices/earringFooterSlice";

const store = configureStore({
    reducer: {
        earringsTemplate: earringsReducer,
        earringTemplateFooter: earringFooterReducer,
    }
});

export default store;