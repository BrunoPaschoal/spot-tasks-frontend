import {createStore, applyMiddleware} from 'redux';
import  createSagaMiddleware  from 'redux-saga';
import rootSaga from './modules/rootSaga';
import { persistStore } from 'redux-persist';

import persistedReducer from './modules/reduxPersist';
import rootReducer from './modules/rootReducer';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(persistedReducer(rootReducer), applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);
export default store;