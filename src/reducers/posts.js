import { SET_POSTS, CLEAR_POSTS, SET_LOADING} from '../actions/posts'

const initialValues = {
    list: [],
    loading: false,
}

export function postsReducer(state = initialValues, action) {
    switch (action.type) {
        case SET_POSTS:
            return { ...state, list: action.payload}
        case CLEAR_POSTS:
            return { ...state, posts: []}
        case SET_LOADING:
            debugger;
            return { ...state, loading: action.loading}
        default:
            return state
    }
}
