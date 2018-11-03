import React, { Component } from 'react'
import FollowBtn from './FollowBtn.js'
import './followAuthor.scss'
import defaultImg from '../../static/images/defaultUrl.jpg'
const ImageHost = window.location.host.indexOf('leewr.com') > -1 ? 'http://www.leewr.com' : 'http://10.1.5.110:7001'
class FollowAuthor extends Component {
	constructor (props) {
		super()
		console.log(props)
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
					<FollowBtn></FollowBtn>
				</div>
			</div>
		)
	}
}

export default FollowAuthor