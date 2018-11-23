import React, { Component } from 'react'
import './me/me.scss'
class Me extends Component {
	render () {
		return (
			<div class="me">
				<div className="head">
					偷窥作者
				</div>
				<div className="meBox">
					<div className="item">About Me</div>
					<div className="item">Engineer</div>
					<div className="item">charts</div>
				</div>
			</div>
		)
	}
}


export default Me