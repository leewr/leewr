import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './header.scss'

class Header extends Component {
  render() {
    return (
      <div className="headerWrap">
        <div className="header">
          <h1>{this.props.title ? this.props.title : '锐读'}</h1>
          <div className="headTab">
            {this.props.navData &&
              this.props.navData.map((item, key) => (
                <NavLink
                  to={`${item.router}`}
                  key={key}
                  activeClassName="active"
                >
                  {item.name}
                  <span />
                </NavLink>
              ))}
          </div>
        </div>
        <div className="headerHolder" />
      </div>
    )
  }
}

export default Header
