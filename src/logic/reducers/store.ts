import { combineReducers, createStore } from 'redux';
import { formReducer } from './reducers';

const rootReducer = combineReducers({
  form: formReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
