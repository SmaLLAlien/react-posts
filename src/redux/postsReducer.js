import {CREATE_POST, FETCH_POST, SUCCESS_CREATE} from "./types";

const initialState = {
    posts: [],
    fetchedPosts: []
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_CREATE: {
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        }

        case FETCH_POST: {
            return {...state, fetchedPosts: action.payload}
        }
    }

    return state
}
