import { createStore } from 'redux'
import rootReducer from '../../storage/reducers/index';

const store = createStore(rootReducer);

export default store;