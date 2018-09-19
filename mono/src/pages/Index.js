import React, { Component } from 'react';
import Header from '../comp/header.js'
import Item from '../comp/item/Item.js'
import Axios from '../utils/request.js'

import './index/index.scss'
class Index extends Component {
	constructor(props) {
		super(props)
		const navData = ["连载", "热门", "关注"]
		this.state = {
			navData: navData,
			itemData: []
		}
	}
	componentDidMount () {
		this.getIndexList()
	}
	getIndexList () {
		let that = this
		Axios.get('/api/v1/topics')
			.then(res => {
				if (res.success) {
					that.setState({
						itemData: res.data
					})
				}
				
				console.log(res)
			}).catch(err => {
				console.log(err)
			})
	}
	render () {
		return (
			<div>
				<Header navData={this.state.navData} />
				<div className="itemWarap">
					{
						this.state.itemData.length && this.state.itemData.map((val, key) => (
							<Item key={key} itemVal={val}/>
						))
					}
				</div>
			</div>
		)
	}
}

export default Index