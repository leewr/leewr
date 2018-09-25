import React, { Component } from 'react'
import dayjs from 'dayjs'

import './commentList.scss'

class CommentList extends Component {
	

	render() {
		let listItem = this.props.commentData.map((item, index) => {
			return (
				<div className="citem" key={index}>
					<div className="chead">
						<img src="http://upload.jianshu.io/users/upload_avatars/3334769/95a8e26b-bb13-4d93-92b3-2e504cf66237.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" />
						<span className="name">{item.authorName}</span>
						<span className="time">{dayjs().format('YYYY.MM.DD HH:mm', item.modifyTime)}</span>
					</div>
					<div className="cbody">
						{item.content}
					</div>
					<div className="cfoot">
						<span>点赞{item.thumbs}</span>
						<span>评论{item.thumbs}</span>
					</div>
				</div>
			)
		})
		return (
			<div className="comment-panel">
				<h3 className="topicNav"><span>评论列表</span></h3>
				{ listItem }
			</div>
		)
	}
}
export default CommentList