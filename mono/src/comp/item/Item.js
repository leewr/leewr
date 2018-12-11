import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Item.scss'
import defaultImg from '../../static/images/defaultUrl.jpg'
import '../../utils/config';
class Item extends Component {
	typeFilter (val) {
		let obj = {
			'share': '分享',
			'ask': '问答'
		}
		return obj[val]
	}
	render() {
		let imgUrl = this.props.itemVal.imgUrl
		let prodImgStr = global.constants.env === 'prod' ? '_350x160' : ''

		if (imgUrl) {
			const  imgUrlName = imgUrl.split('.')
			// const webp = global.constants.webpa ? '.webp' : ''
			console.log('global.constants.webpa', global.constants.webpa)
			if (global.constants.webpa) {
				imgUrl = `${global.constants.ImageHost}${imgUrlName[0]}.webp`
			} else {
				imgUrl = `${global.constants.ImageHost}${imgUrlName[0]}${prodImgStr}.${imgUrlName[1]}`
			}
		}
		
		return (
			<div className="item">
				<div className="itemHead">
					<div>
						<img src={this.props.itemVal.avatarUrl ? global.constants.ImageHost +  this.props.itemVal.avatarUrl : defaultImg} />
						<span>{this.props.itemVal.name}</span>
					</div>
					<span className="f12">
						{this.typeFilter(this.props.itemVal.tab)}
					</span>
				</div>
				<Link to={`/topics/${this.props.itemVal.id}`} className="itemBody">
					{this.props.itemVal.imgUrl ? <img className="itemImg" src={imgUrl}/>: ''}
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