import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './reducer/servicesSlice';
import profileReducer from './reducer/profileSlice';

const store = configureStore({
  reducer: {
    services: servicesReducer,
    profile: profileReducer,
  },
});

export default store;