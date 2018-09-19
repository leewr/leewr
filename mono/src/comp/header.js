import React, { Component } from 'react';
import './header.scss'

class Header extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="headerWrap">
				<div className="header">
					<h1>锐度</h1>
					<div className="headTab">
						{
							this.props.navData && this.props.navData.map((name, key) => (
								<a key={key} className={key === 0 ? 'active': ''}>
									{name}
									<span></span>
								</a>
							))
						}
					</div>
				</div>
				<div className="headerHolder"></div>
			</div>
		)
	}
}

export default Header