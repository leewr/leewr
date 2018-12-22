import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Item.scss'
import defaultImg from '../../static/images/defaultUrl.jpg'
import '../../utils/config'
import { webpExt } from '../../utils/common'
class Item extends Component {
	typeFilter (val) {
		let obj = {
			'share': '分享',
			'ask': '问答'
		}
		return obj[val]
	}
	render() {
		let imgUrl = webpExt(this.props.itemVal.imgUrl, 350, 160, true)		
		return (
			<div className="item">
				<div className="itemHead">
					<div>
						<img alt={this.props.itemVal.name} src={this.props.itemVal.avatarUrl ? global.constants.ImageHost +  this.props.itemVal.avatarUrl : defaultImg} />
						<span>{this.props.itemVal.name}</span>
					</div>
					<span className="f12">
						{this.typeFilter(this.props.itemVal.tab)}
					</span>
				</div>
				<Link to={`/topics/${this.props.itemVal.id}`} className="itemBody">
					{this.props.itemVal.imgUrl ? <img alt={this.props.itemVal.title} className="itemImg" src={imgUrl}/>: ''}
					<div className="title">
						{this.props.itemVal.title}
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