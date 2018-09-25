import React, { Component } from 'react'
import FollowBtn from './FollowBtn.js'
import './followAuthor.scss'
class FollowAuthor extends Component {
	constructor (props) {
		super()
		console.log(props)
	}
	render () {
		return (
			<div className="followAuthor">
				<img src={this.props.followData.avatarUrl}></img>
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