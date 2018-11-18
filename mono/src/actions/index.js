import Axios from '../utils/request'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const GETUSERSTATE = 'GETUSERSTATE'

export const requestPosts = subreddit => ({
	type: REQUEST_POSTS,
	subreddit
})

export const receivePosts = (subreddit, json) => ({
	type: RECEIVE_POSTS,
	subreddit,
	posts: json.data.children.map(child => child.data),
	receivedAt: Date.now()
})

const fetchPosts = subreddit => dispatch => {
	dispatch(requestPosts(subreddit))
	return fetch(`https://www.reddit.com/r/${subreddit}.json`)
		.then(response => response.json())
		.then(json => dispatch(receivePosts(subreddit, json)))
}

const shouldFetchPosts = (state, subreddit) => {
	console.log(state)
	const posts = state.postsBySubreddit[subreddit]
	if (!posts) return true
	if (posts.isFetchind) return false
	return posts.didInvalidate
}

export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
	if (shouldFetchPosts(getState(), subreddit)) {
		return dispatch(fetchPosts(subreddit))
	}
}

export const loginRequest = (params, callback) => (dispatch) => {
	// dispatch(requestPosts)
	return  Axios.post(`/api/v1/passport/local`, params)
		.then(res => {
			if (res.success) {
				window.sessionStorage.userState = JSON.stringify(res.data)
				dispatch(receiveLoginRequest(res.data))
				callback && typeof callback == 'function' && callback()
			}
		})
}

export const receiveLoginRequest = (json) => ({
	type: GETUSERSTATE,
	userState: json,
	receivedAt: Date.now()
})