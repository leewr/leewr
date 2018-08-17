import React, { Component } from 'react';
import Header from '../comp/header.js'
import Item from '../comp/item/Item.js'

import './index/index.scss'
class Index extends Component {
	constructor(props) {
		super(props)
		const navData = ["早午茶", "我的关注", "猜你喜欢", "视频", "音乐"]
		this.state = {
			navData: navData,
			itemData: ["早午茶", "我的关注", "猜你喜欢", "视频", "音乐"]
		}
	}
	render () {
		return (
			<div>
				<Header navData={this.state.navData} />
				<div className="itemWarap">
					{
						this.state.itemData.map((val, key) => (
							<Item key={key} />
						))
					}
				</div>
			</div>
		)
	}
}

export default Index