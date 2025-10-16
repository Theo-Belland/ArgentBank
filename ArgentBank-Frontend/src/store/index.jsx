import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice';
import userReducer from './features/user/userSlice';
import { argentBankApi } from './api/argentBank';

// 3 - Export du store
// Configuration du store Redux
const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    // Ajout de l'API slice (RTK Query)
    [argentBankApi.reducerPath]: argentBankApi.reducer,
  },
  // Ajout des middleware (on conserve les middleware par défaut + RTK Query)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(argentBankApi.middleware),

  // Activation des devTools Redux — compatible Vite / RTK
  devTools: import.meta.env.MODE !== 'production',
});

export default store;
