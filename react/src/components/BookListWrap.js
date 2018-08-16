import React, { Component } from 'react'


class BookListWrap extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: props
		}
	}
	componentDidMount() {
		
	}
	render () {
		return (
			<div className="book-list-wrap">
				<h1>{this.state.data.title || '默认标题'}</h1>
				{this.state.data.children}
			</div>
		)
	}
}

export default BookListWrap