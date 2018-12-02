import React, { Component } from 'react';
import Axios, { apiStatusCheck } from '../../utils/request.js'
import './imgList.scss'
// 图片nginx有必要处理一层

class ImgList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imagesList: [],
            show: this.props.show,
		}
    }
    componentDidMount() {
        // this.list()
    }
    componentWillReceiveProps (nextProps) {
        console.log(nextProps)
		setTimeout(() => {
            this.setState({
                show: nextProps.show
            })
            // this.props.show = nextProps.show
		}, 0)
	}
    list () {
        Axios.get(`/api/v1/uploads`)
            .then(res => {
                apiStatusCheck(this.props, res, () =>{
                    this.setState({
                        imagesList: res.data.list
                    })
                })
            }).catch(err => {
				console.log(err)
			})
    }
    imageChange(index) {
        console.log(index)
        this.props.onImageSelectChange(this.state.imagesList[index])
        // this.setState({
        //     show: false
        // })
        // console.log(this.props)
        // this.props.show = false
    }

    

    render() {
        const list = this.state.imagesList.map((item, index) => {
            return (
                <div className="imgItem" key={index}>
                    <div className="imgHolder" onClick={this.imageChange.bind(this, index)}>
                        <img src={item.originUrl} />
                    </div>
                </div>
            )
        })
        return (
            <div className={this.state.show ? 'imgViewBox' : 'imgViewBox hide'}>
                <div className="imgViewScroll">
                    {this.state.imagesList.length > 0 ? list : '暂无图片'}
                </div>
            </div>
        )
    }
}


export default ImgList