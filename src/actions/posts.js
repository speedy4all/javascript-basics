export const SET_POSTS = 'SET_POSTS';
export const CLEAR_POSTS = 'CLEAR_POSTS';
export const SET_LOADING = 'SET_LOADING';

export function setPosts(list){
    return {
        type: SET_POSTS,
        payload: list
    }
}
export function clearPosts(){
    return {
        type: CLEAR_POSTS,
    }
}

export function setLoadingFlag(loading){
    return {
        type: SET_LOADING,
        loading
    }
}
