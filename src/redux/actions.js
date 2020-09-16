import {CREATE_POST, FETCH_POST, HIDE_ALERT, HIDE_LOADER, REQUESTS_POSTS, SHOW_ALERT, SHOW_LOADER} from "./types";

export const createPost = (post) =>  {
    return {
        type: CREATE_POST, payload: post
    }
}

export const showLoader = () => {
    return {
        type: SHOW_LOADER
    }
}

export const hideLoader = () => {
    return {
        type: HIDE_LOADER
    }
}

export const showAlert = (text) => {
    return dispatch => {
        dispatch(
            {
                type: SHOW_ALERT,
                payload: text
            }
        )
        setTimeout(() => {dispatch(hideAlert())}, 3000);
    }
}

export const hideAlert = () => {
    return {
        type: HIDE_ALERT
    }
}


export const  fetchPost = () => {
    return {
        type: REQUESTS_POSTS
    }
}
