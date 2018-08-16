import React, { Component } from 'react'
import { NavBar, Icon, Carousel, Grid, Toast} from 'antd-mobile'
import FilterWrap from './FilterWrap.js';
import BookListWrap from './BookListWrap.js';
import Api from '../api/Api.js'
import './Bookstore.scss'

const typeData = [{name: '男生小说',id: 'boy'},{name: '女生小说', id: 'girl'} ,{name: '出版书籍', id: 'pub'}]

// function BookListWrap (props) {
// 	return (
// 		<div className="book-list-wrap">
// 			<h1>{props.title || '默认标题'}</h1>
// 			{props.children}
// 		</div>
// 	)
// }



class Bookstore extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: ["1","2","3"],
			bookData: [],
			currentId: 'boy'
		}
	}
	componentDidMount(){

	}
	getBookList (id){
		Api.get(`${id}`)
			.then(response => {
				this.setState({
					bookData: response.data.data,
					currentId: id
				})
			})
	}
	render(){
		return (
			<div className="Bookstore">
				<NavBar
					mode="light"
					icon={<Icon type="left"/>}
					onLeftClick={()=> console.log('onLeftClick')}
					rightContent={
						<Icon key="0" type="search"/>
					}
				>
				书城
				</NavBar>
				<FilterWrap 
					title="选择阅读喜好"
					typeData={typeData}
					currentId={this.state.currentId}
					getBookList={this.getBookList.bind(this)}
				/>
				<Carousel
		          autoplay={false}
		          infinite
		          selectedIndex={1}
		          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
		          afterChange={index => console.log('slide to', index)}
		        >
		          {this.state.data.map(val => (
		            <a
		              key={val}
		              href="http://www.alipay.com"
		              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
		            >
		              <img
		                src={require(`../static/img/${val}.jpg`)}
		                alt=""
		                style={{ width: '100%', verticalAlign: 'top' }}
		                onLoad={() => {
		                  // fire window resize event to change height
		                  window.dispatchEvent(new Event('resize'));
		                  this.setState({ imgHeight: 'auto' });
		                }}
		              />
		            </a>
		          ))}
		        </Carousel>
		        <BookListWrap
		        	title="精选标题"
		        	/>
			</div>
		)
	}
}

export default Bookstore;