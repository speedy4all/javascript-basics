export const SET_ERROR = 'SET_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'

export function setError(message){
    return {
        type: SET_ERROR,
        payload: message
    }
}
export function clearPosts(){
    return {
        type: CLEAR_ERROR,
    }
}
