import React, { Component } from 'react'
import { withRouter } from "react-router"
import Axios, {apiStatusCheck} from '../../utils/request.js'

class FollowBtn extends Component {
	constructor (props) {
        super(props)
        console.log('btnprops', props)
        this.state = {
            userId: '',
            followed: 0
        }
    }
    componentWillReceiveProps (nextProps) {
        console.log(nextProps)
        setTimeout(() => {
            this.setState({
                userId: nextProps.userId,
                followed: nextProps.isFollowed
            }, () => {console.log(this.state)})
        }, 0)
	}
    follow () {
        Axios.post(`/api/v1/u/${this.state.userId}/toggleFollow`)
            .then(res => {
                apiStatusCheck(this.props, res, () =>{
                    this.setState({
                        followed: res.data.followed
                    })
                })
            }).catch(err => {
				console.log(err)
			})
    }
	render () {
		return (
            <a onClick={this.follow.bind(this)} className={this.state.followed ? 'followed': 'follow'}>{this.state.followed ? '已关注': '关注'}</a>
		)
	}
}

export default withRouter(FollowBtn)