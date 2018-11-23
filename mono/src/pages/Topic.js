import React, { Component } from 'react'
import Header from '../comp/header.js'
import Comment from '../comp/comment/Comment.js'
import CommentList from '../comp/commentList/CommentList.js'
import FollowAuthor from '../comp/follow/followAuthor.js'

import Axios from '../utils/request.js'

import './topic/topic.scss'

class Topic extends Component {
	constructor (props) {
		super(props)
		const navData = ["连载", "热门", "关注"]
		this.state = {
			navData: navData,
			data: '',
			userInfo: '',
			commentData: []
		}
		console.log(this.props.match.params.id)
	}
	componentDidMount () {
		let id = this.props.match.params.id
		this.getTopicById(id)
		this.getCommentList(id)
	}
	getTopicById(id) {
		Axios.get(`/api/v1/topic/${id}`, {page: 2})
			.then(res => {
				console.log(res.success)
				if (res.success) {
					this.setState({
						data: res.data,
						userInfo: res.data.userInfo
					})
				}
			}).catch(err => {
				console.log(err)
			})
	}
	getCommentList(id) {
		Axios.get(`/api/v1/topic/${id}/comment`)
			.then(res => {
				if (res.success) {
					this.setState({
						commentData: res.data
					})
				}
			}).catch(err => {
				console.log(err)
			})
	}
	toggleLike () {
		let id = this.props.match.params.id
		Axios.get(`/api/v1/topic/${id}/like`)
			.then(res => {
				if (res.success) {
					
				}
			}).catch(err => {
				console.log(err)
			})
	}
	render () {
		return (
			<div className="topic">
				<Header navData={this.state.navData} />
				<div className="topicWrap">
					<h1>{this.state.data.title}</h1>
					<div className="author">
						<span>文 / {this.state.userInfo.username}</span>
					</div>
					<div className="content" dangerouslySetInnerHTML={{__html: this.state.data.content}}>
					</div>
					<div className="readNum">
						<span>阅读 {this.state.data.view}</span>
						<span onClick={this.toggleLike.bind(this)} className={`thumbs icon iconfont ${this.state.data.isLiked ? 'icon-zan1 active' : ' icon-zan'}`}><i className="f12">{this.state.data.likeNum}</i></span>
					</div>
				</div>
				<div className="wrap">
					<h3 className="topicNav"><span>作者</span></h3>
					<FollowAuthor followData={this.state.userInfo}></FollowAuthor>
				</div>
				<CommentList commentData={this.state.commentData} />
				<Comment articleId={this.props.match.params.id}></Comment>
			</div>
		)
	}
}
export default Topic