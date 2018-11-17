import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './header.scss'

class Header extends Component {
	constructor (props) {
		super()
		console.log(props)
	}
	render() {
		return (
			<div className="headerWrap">
				<div className="header">
					<h1>锐读</h1>
					<div className="headTab">
						{
							this.props.navData && this.props.navData.map((item, key) => (
								<NavLink to={`${item.router}`} key={key} activeClassName="active">
								{item.name}
									<span></span>
								</NavLink>
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


