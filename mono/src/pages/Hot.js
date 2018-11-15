import React, { Component } from 'react'
import Protypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPostsIfNeeded, invalidateSubreddit } from '../actions'
import Posts from '../comp/Posts'

class Hot extends Component {
	static propTypes = {

	}
	componentDidMount() {
		const { dispatch, selectedSubreddit } = this.props
		console.log(selectedSubreddit)
		dispatch(fetchPostsIfNeeded(selectedSubreddit))
	}

	componentWillReceiveProps(nextProps) {

	}

	render () {
		const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
		const isEmpty = posts.length === 0
		return (
			<div>
				{
					isEmpty ? (isFetching ? <h2>Loading...</h2> : <h2>empty</h2>)
							: <div style={{opacity: isFetching ? 0.5 : 1}}>
								<Posts posts={posts} />
							  </div>
				}
			</div>
		)
	}
}

const mapStateToProps = state => {
	const { selectedSubreddit, postsBySubreddit } = state
	const {
		isFetching,
		lastUpdated,
		items: posts
	} = postsBySubreddit[selectedSubreddit] || {
		isFetching: true,
		items: []
	}
	return {
		selectedSubreddit,
		posts,
		isFetching,
		lastUpdated
	}
}

export default connect(mapStateToProps)(Hot)