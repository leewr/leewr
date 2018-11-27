import React, { Component } from 'react';
import Header from '../comp/header.js'
import Item from '../comp/item/Item.js'
import Axios from '../utils/request.js'
import { connect } from 'react-redux'
/* eslint no-dupe-keys: 0 */
import { ListView } from 'antd-mobile';

import './index/index.scss'


const NUM_ROWS = 20;
let pageIndex = 1;
const navData = [{name:"连载",'router': '/'}, {name:"热门", 'router': '/hot'}, {name: "关注", 'router': '/focus'}]

function getData(pIndex = 1, callBack) {
	console.log('pIndex', pIndex)
	Axios.get('/api/v1/topics', {page: pIndex})
		.then(res => {
			if (res.success) {
				callBack && typeof callBack === 'function' && callBack(res)
			}
		}).catch(err => {
			console.log(err)
		})
}

function genData(pIndex = 0) {
	const dataBlob = {};
	for (let i = 0; i < NUM_ROWS; i++) {
	  const ii = (pIndex * NUM_ROWS) + i;
	  dataBlob[`${ii}`] = `row - ${ii}`;
	}
	return dataBlob;
}

class Index extends Component {
	constructor(props) {
		super(props)
		
		const dataSource = new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1 !== row2,
		})
		console.log(dataSource)
		this.state = {
			navData: navData,
			dataSource,
			isLoading: true
		}
	}
	componentDidMount () {
		getData(1, (res) => {
			this.rData = res.data.list
			console.log(this.rData)
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(this.rData),
				isLoading: false
			})
		})
	}
	onEndReached = (event) => {
		if (this.state.isLoading && !this.state.hasMore) {
			return;
		}
		console.log('reach end', event);
		this.setState({ isLoading: true })
		getData(++pageIndex, (res) => {
			this.rData.push(...res.data.list)
			this.setState({ 
				dataSource: this.state.dataSource.cloneWithRows(this.rData),
				isLoading: false
			})
		})
	}
	render () {
		const row = (val, sectionID, rowId) => {
			return (
				<Item key={rowId} itemVal={val}/>
			)
		};
		return (
			<div>
				<Header navData={this.state.navData} />
				<ListView
			        ref={el => this.lv = el}
			        dataSource={this.state.dataSource}
			        renderHeader={() => <span>header</span>}
			        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
			          {this.state.isLoading ? 'Loading...' : 'Loaded'}
			        </div>)}
			        renderRow={row}
			        className="am-list"
			        pageSize={4}
			        useBodyScroll
			        onScroll={() => { }}
			        scrollRenderAheadDistance={500}
			        onEndReached={this.onEndReached}
			        onEndReachedThreshold={10}
			      />
			</div>
		)
	}
}

export default connect()(Index)