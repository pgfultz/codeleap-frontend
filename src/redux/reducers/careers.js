import {
    GET_POSTS_REDUCER,
    POST_POSTS_REDUCER,
    EDIT_POSTS_REDUCER,
    DELETE_POSTS_REDUCER,
    CLEAR_ALL_REDUCER,
} from '../../actions';

export const getPostsReducer = (state = null, action) => {
  switch (action.type) {
    case GET_POSTS_REDUCER:
      return action.payload;
    default:
      return state;
  }
};

export const posttPostsReducer = (state = null, action) => {
  switch (action.type) {
    case POST_POSTS_REDUCER:
      return action.payload;
    case CLEAR_ALL_REDUCER:
      return null;
    default:
      return state;
  }
};

export const editPostsReducer = (state = null, action) => {
  switch (action.type) {
    case EDIT_POSTS_REDUCER:
      return action.payload;
    case CLEAR_ALL_REDUCER:
      return null;
    default:
      return state;
  }
};

export const deletePostsReducer = (state = null, action) => {
  switch (action.type) {
    case DELETE_POSTS_REDUCER:
      return action.payload;
    case CLEAR_ALL_REDUCER:
      return null;
    default:
      return state;
  }
};