import { combineReducers } from 'redux'
import { postsReducer } from './posts'
import { errorReducer }  from './error'

const app = combineReducers({
    posts: postsReducer,
    error: errorReducer,
})

export default app
