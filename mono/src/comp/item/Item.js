import React, { Component } from 'react';
import './Item.scss'
import defaultImg from '../../static/images/defaultUrl.jpg'
const ImageHost = 'http://localhost:7001'
class Item extends Component {
	constructor(props) {
		super(props)
	}
	typeFilter (val) {
		let obj = {
			'share': '分享',
			'ask': '问答'
		}
		return obj[val]
	}
	render() {
		return (
			<div className="item">
				<div className="itemHead">
					<div>
						<img src={this.props.itemVal.avatarUrl ? ImageHost + this.props.itemVal.avatarUrl : defaultImg} />
						<span>{this.props.itemVal.name}</span>
					</div>
					<span className="f12">
						{this.typeFilter(this.props.itemVal.tab)}
					</span>
				</div>
				<div className="itemBody">
					{this.props.itemVal.imgUrl ? <img src={this.props.itemVal.imgUrl ? this.props.itemVal.imgUrl : defaultImg}/>: ''}
					<div className="title">
						MONO电台 | {this.props.itemVal.title}
					</div>
					<div className="tags">
						<span>{this.props.itemVal.summary}</span>
					</div>
					<div className="summary">
						{this.props.itemVal.summary}
					</div>
				</div>
				<div className="itemBot">
					<span className="share icon iconfont icon-fenxiang"></span>
					<span className="favorite icon iconfont icon-shoucang"></span>
					<span className="thumbs icon iconfont icon-zan"></span>
					<span className="comments icon iconfont icon-pinglun"></span>
					<span className="fr dot">
						<em></em>
						<em></em>
						<em></em>
					</span>
				</div>
			</div>
		)
	}
}

export default Item