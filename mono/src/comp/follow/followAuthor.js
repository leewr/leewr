import React, { Component } from 'react'

import FollowBtn from './FollowBtn.js'
import './followAuthor.scss'
import defaultImg from '../../static/images/defaultUrl.jpg'
const ImageHost = window.location.host.indexOf('leewr.com') > -1 ? 'http://www.leewr.com' : 'http://localhost:7001'

class FollowAuthor extends Component {
	constructor (props) {
		super()
		console.log(props)
		this.state = {
			userId: '',
			isFollowed: 0
		}
	}
	componentWillReceiveProps (nextProps) {
		console.log('nextProps', nextProps)
		this.setState({
			userId: nextProps.followData.id,
			isFollowed: nextProps.followData.isFollowed
		})
	}
	render () {
		return (
			<div className="followAuthor">
				<img src={this.props.followData.avatarUrl ? ImageHost + this.props.followData.avatarUrl : defaultImg}></img>
				<div className="info">
					<div className="name">{this.props.followData.username}</div>
					<p className="con">{this.props.followData.intro}</p>
				</div>
				<div className="followBtn">
					<FollowBtn userId={this.state.userId} isFollowed={this.state.isFollowed}></FollowBtn>
				</div>
			</div>
		)
	}
}

export default FollowAuthor