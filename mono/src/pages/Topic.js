import React, { Component } from 'react'
import Header from '../comp/header.js'
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
					console.log(res.data.userInfo)
				}
				console.log(res)
			}).catch(err => {
				console.log(err)
			})
	}
	getCommentList(id) {
		let that = this
		Axios.get(`/api/v1/topic/${id}/comment`)
			.then(res => {
				if (res.success) {
					that.setState({
						commentData: res.data
					})
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
				</div>
				<div className="wrap">
					<h3 className="topicNav"><span>作者</span></h3>
					<FollowAuthor followData={this.state.userInfo}></FollowAuthor>
				</div>
				<CommentList commentData={this.state.commentData} />
			</div>
		)
	}
}
export default Topic