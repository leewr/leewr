import React, { Component } from 'react'
import Axios from '../../utils/request.js'
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
		this.setState({
            userId: nextProps.userId
        })
	}
    follow () {
        Axios.post(`/api/v1/u/${this.state.userId}/toggleFollow`)
            .then(res => {
                if (res.success) {
                    this.setState({
                        followed: res.data.followed
                    })
                }
                console.log(res)
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

export default FollowBtn