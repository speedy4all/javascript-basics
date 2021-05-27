import { SET_ERROR, CLEAR_ERROR } from '../actions/error'

export function errorReducer(state = {}, action) {
    switch (action.type) {
        case SET_ERROR:
            return action.payload
        case CLEAR_ERROR:
            return {}
        default:
            return state
    }
}
