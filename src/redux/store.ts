import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from '@app/redux/app/reducer';
import budgetSlice from '@app/redux/budget/reducer'

const rootReducer = combineReducers({
  appReducer,
  budgetSlice
});

const store = configureStore({
  reducer: rootReducer,
  // Nếu bạn muốn sử dụng Redux DevTools Extension, bạn không cần cấu hình thêm
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;