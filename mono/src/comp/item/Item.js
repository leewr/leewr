import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Item.scss'
import defaultImg from '../../static/images/defaultUrl.jpg'
const ImageHost = window.location.host.indexOf('leewr.com') > -1 ? 'http://www.leewr.com' : ''
class Item extends Component {
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
						<img src={this.props.itemVal.avatarUrl ? ImageHost +  this.props.itemVal.avatarUrl : defaultImg} />
						<span>{this.props.itemVal.name}</span>
					</div>
					<span className="f12">
						{this.typeFilter(this.props.itemVal.tab)}
					</span>
				</div>
				<Link to={`/topics/${this.props.itemVal.id}`} className="itemBody">
					{this.props.itemVal.imgUrl ? <img className="itemImg" src={this.props.itemVal.imgUrl ? ImageHost + this.props.itemVal.imgUrl : defaultImg}/>: ''}
					<div className="title">
						MONO电台 | {this.props.itemVal.title}
					</div>
					{this.props.itemVal.tags ? <div className="tags">
						<span>{this.props.itemVal.tags}</span>
					</div> : ''}
					<div className="summary">
						{this.props.itemVal.summary}
					</div>
				</Link>
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