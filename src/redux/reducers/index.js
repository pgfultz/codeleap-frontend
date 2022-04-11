import {combineReducers} from 'redux';

import {
    getPostsReducer,
    posttPostsReducer,
    editPostsReducer,
    deletePostsReducer,
} from './careers';

const rootReducer = combineReducers({
    getPostsReducer,
    posttPostsReducer,
    editPostsReducer,
    deletePostsReducer,
});
  
export default rootReducer;