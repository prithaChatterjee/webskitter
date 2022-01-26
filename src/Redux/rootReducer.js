import { combineReducers } from 'redux'
import { UserReducer } from './authentication/authentication.reducer'

export default combineReducers({
    user: UserReducer
})