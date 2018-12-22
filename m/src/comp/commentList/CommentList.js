import React, { Component } from 'react'
import { withRouter } from "react-router"
import Axios, { apiStatusCheck } from '../../utils/request.js'
import { dateFtt } from '../../utils/common.js'


import './commentList.scss'


class CommentList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			commentData: []
		}
	}
	componentWillReceiveProps (nextProps) {
		setTimeout(() => {
			this.setState({
				commentData: nextProps.commentData
			})
		}, 0)
	}
	toggleThumbs (index, commentId) {
		let id = this.props.match.params.id
		Axios.post(`/api/v1/topic/${id}/comment/thumbs`, {commentId})
			.then(res => {
				apiStatusCheck(this.props, res, () =>{
					let commentData = this.state.commentData
					// commentData[index].thumbs
					res.data.status ? commentData[index].thumbs++ : commentData[index].thumbs--
					this.setState({
						commentData
					})
                })
			}).catch(err => {
				console.log(err)
			})
	}
	render() {
			console.log(this.state.commentData)
			let listItem = this.state.commentData.map((item, index) => {
			return (
				<div className="citem" key={index}>
					<div className="chead">
						<img alt="" src="http://upload.jianshu.io/users/upload_avatars/3334769/95a8e26b-bb13-4d93-92b3-2e504cf66237.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" />
						<span className="name">{item.authorName}</span>
						<span className="time">{dateFtt(new Date(item.modifyTime), 'yyyy.MM.dd hh:mm')}</span>
					</div>
					<div className="cbody">
						{item.content}
					</div>
					<div className="cfoot">
						{/* <span>点赞{item.thumbs}</span> */}
						<span onClick={this.toggleThumbs.bind(this, index, item.cid)}><i className="icon iconfont icon-zan"></i><em>{item.thumbs}</em></span>
					</div>
				</div>
			)
		})
		return (
			<div className="comment-panel">
				<h3 className="topicNav"><span>评论列表</span></h3>
				{ this.props.commentData.length > 0 ? listItem :  <h3 className="noComment">你会是打破沉默的第一个人么？</h3>}
			</div>
		)
	}
}
export default withRouter(CommentList)