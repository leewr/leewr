import {combineReducers } from  'redux'
import { userState, postsBySubreddit, selectedSubreddit } from './userState'
export default combineReducers({
	userState,
	postsBySubreddit,
	selectedSubreddit
})