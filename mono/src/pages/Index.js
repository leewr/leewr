import React, { Component } from 'react';
import Header from '../comp/header.js'
import './index/index.scss'
class Index extends Component {
	constructor(props) {
		super(props)
		const navData = ["早午茶", "我的关注", "猜你喜欢", "视频", "音乐"]
		this.state = {
			navData: navData
		}
	}
	render () {
		return (
			<Header navData={this.state.navData}></Header>
		)
	}
}

export default Index