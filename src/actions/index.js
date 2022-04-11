export const CLEAR_ALL_REDUCER = "CLEAR_ALL_REDUCER";
export const GET_POSTS_SAGA = "GET_POSTS_SAGA";
export const GET_POSTS_REDUCER = "GET_POSTS_REDUCER";
export const POST_POSTS_SAGA = "POST_POSTS_SAGA";
export const POST_POSTS_REDUCER = "POST_POSTS_REDUCER";
export const EDIT_POSTS_SAGA = "EDIT_POSTS_SAGA";
export const EDIT_POSTS_REDUCER = "EDIT_POSTS_REDUCER";
export const DELETE_POSTS_SAGA = "DELETE_POSTS_SAGA";
export const DELETE_POSTS_REDUCER = "DELETE_POSTS_REDUCER";

export function clearAllReducer() {
    return {
      type: CLEAR_ALL_REDUCER
    };
}

export function getPosts() {
    return {
      type: GET_POSTS_SAGA
    };
}

export function postPosts(payload) {
    return {
      type: POST_POSTS_SAGA,
      payload
    };
}

export function editPosts(payload) {
    return {
      type: EDIT_POSTS_SAGA,
      payload
    };
}

export function deletePosts(payload) {
    return {
      type: DELETE_POSTS_SAGA,
      payload
    };
}