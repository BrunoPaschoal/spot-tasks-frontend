import {createStore} from 'redux';
import { persistStore } from 'redux-persist';

import persistedReducer from './modules/reduxPersist';
import rootReducer from './modules/rootReducer';

const store = createStore(persistedReducer(rootReducer))

export const persistor = persistStore(store);
export default store;