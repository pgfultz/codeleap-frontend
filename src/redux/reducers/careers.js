import {
    GET_POSTS_REDUCER,
    CLEAR_ALL_REDUCER,
} from '../../actions';

export const getPostsReducer = (state = null, action) => {
    switch (action.type) {
      case GET_POSTS_REDUCER:
        return action.payload;
      case CLEAR_ALL_REDUCER:
        return null;
      default:
        return state;
    }
  };