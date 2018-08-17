import React, { Component } from 'react';
import './header.scss'

class Header extends Component {
	constructor(props) {
		super(props)
		console.log(props)
	}
	render() {
		return (
			<div className="header">
				{
					this.props.navData && this.props.navData.map((name, key) => (
						<a key={key} className={key == 0 ? 'active': ''}>
							{name}
						</a>
					))
				}
			</div>
		)
	}
}

export default Header