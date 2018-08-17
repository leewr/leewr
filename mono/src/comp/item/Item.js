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
						<img src="" />
						<span>MONO电台</span>
					</div>
					<span>
						影视
					</span>
				</div>
				<div className="itemBody">
					<img src="http://d303.paixin.com/thumbs/7782150/196592460/staff_1024.jpg?imageView2/2/w/400/h/400" className="itemImg" />
				</div>
			</div>
		)
	}
}

export default Item