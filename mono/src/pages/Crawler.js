import React, { Component } from 'react'
import Header from '../comp/header.js'
import Comment from '../comp/comment/Comment.js'
import CommentList from '../comp/commentList/CommentList.js'
import FollowAuthor from '../comp/follow/followAuthor.js'

import Axios, { apiStatusCheck } from '../utils/request.js'

import './topic/topic.scss'

class Crawler extends Component {
	constructor (props) {
		super(props)
		const navData = ["连载", "热门", "关注"]
		this.state = {
			navData: navData,
			data: '',
			userInfo: '',
			imgFile: ''
		}
		console.log(this.props.match.params.id)
	}
	componentDidMount () {
		let id = this.props.match.params.id
		this.getTopicById(id)
	}
	getTopicById(id) {
		Axios.get(`/api/v1/crawlers/${id}`)
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
	getLocalImage = (event) => {
		let that = this
		this.setState({
			file: event.target.files[0]
		}, () => {
			console.log(this.state.file)
			//创建读取文件的对象
			var reader = new FileReader();
			//正式读取文件
			reader.readAsDataURL(this.state.file);
			//为文件读取成功设置事件
			var str = '';
			reader.onload = (e) => {
				that.setState({
					imgFile: e.target.result
				})
			}
		})
		
	}
	
	render () {
		return (
			<div className="topic">
				<Header navData={this.state.navData} />
				<div className="topicWrap">
					<div className="uploadBox">
						<label htmlFor="uploadImage" className="uploadImage">
							<input type="file" hidden id="uploadImage" name="uploadImage" onChange={(e) => this.getLocalImage(e)} />
							上传封面图片
							<img className={this.state.imgFile ? 'previewImage' : 'hide'} src={this.state.imgFile} />
						</label>
						<div className={this.state.imgFile ? 'btn active show' : 'hide'}>上传图片</div>
					</div>
					<h1>{this.state.data.title}</h1>
					<div className="author">
						<span>文1 / {this.state.userInfo.username}</span>
					</div>
					<div className="content" dangerouslySetInnerHTML={{__html: this.state.data.content}}>
					</div>
					<div className="readNum">
						<span>阅读 {this.state.data.view}</span>
					</div>
					<div className="btn">发布入库</div>
				</div>
			</div>
		)
	}
}
export default Crawler