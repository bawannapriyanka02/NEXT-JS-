import { configureStore } from '@reduxjs/toolkit';
import reducer from "./silce"

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import LoginReducer from "./silce/loginSilce"
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: {
        login: LoginReducer,
        persistedReducer: persistedReducer
    },
});

export const persistor = persistStore(store);

export default store;
