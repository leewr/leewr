import React, { Component } from 'react'
import Axios from '../../utils/request.js'
import { connect } from 'react-redux'
import { withRouter } from "react-router"
import store from '../../store'
import './comment.scss'

class Comment extends Component {
	constructor (props) {
		super(props)
		this.state = {
			length: 500,
			value: 0,
			articleId: 0
		}
	}
	getComment (e) {
		this.setState({
			length: 500 - e.target.value.length,
			value: e.target.value
		})
	}
	postComment () {
		console.log(store.getState().userState)
		if (store.getState().userState.id) {
			const params = {
				content: this.state.value,
				articleId: this.props.articleId,
				authorId: store.getState().userState
			}
			Axios.post(`/api/v1/topic/${this.props.articleId}/comment`, params)
				.then(res => {
					if (res.success) {
						this.setState({
							commentData: res.data
						})
					}
				}).catch(err => {
					console.log(err)
				})
		} else {
			this.props.history.push('/login')
		}
		
	}
	render() {
		return (
			<div className="comment">
				<textarea className="pl-post-word" placeholder="写下你想说的，开始我们的对话" onChange={(e)=>this.getComment(e)}></textarea>
				<div className="commentfooter">
					<div className="commentNum">{this.state.length}</div>
					<div className="btn" onClick={this.postComment.bind(this)}>评论</div>
				</div>
			</div>
		)
	}
}
const mapStateToProps = state => {
	const { userState } = state
	return {
		userState
	}
}
const commentRouter = withRouter(Comment)
export default connect(mapStateToProps)(commentRouter)