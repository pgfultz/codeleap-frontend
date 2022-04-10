import {combineReducers} from 'redux';

import {
    getPostsReducer,
} from './careers';

const rootReducer = combineReducers({
    getPostsReducer
});
  
export default rootReducer;