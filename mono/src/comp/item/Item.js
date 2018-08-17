import React, { Component } from 'react';
import './Item.scss'
class Item extends Component {
	constructor(props) {
		super(props)

	}
	render() {
		return (
			<div className="item">
				<div className="itemHead">
					<div>
						<img src="http://d303.paixin.com/thumbs/7782150/196592460/staff_1024.jpg?imageView2/2/w/400/h/400" />
						<span>MONO电台</span>
					</div>
					<span className="f12">
						影视
					</span>
				</div>
				<div className="itemBody">
					<img src="http://d303.paixin.com/thumbs/7782150/196592460/staff_1024.jpg?imageView2/2/w/400/h/400" className="itemImg" />
					<div className="title">
						MONO电台 | 从《四个春天》到私影响
					</div>
					<div className="tags">
						<span>录制：海岸线、野菜</span>
					</div>
					<div className="summary">
						scss样式预编译的工具就不多解释,网上的介绍非常多。 留一个牛逼的地址:大漠讲解scss只说在react项目中的配置。
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