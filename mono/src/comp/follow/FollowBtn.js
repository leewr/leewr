import React, { Component } from 'react'
import Axios from '../../utils/request.js'
class FollowBtn extends Component {
	constructor (props) {
		super()
    }
    follow () {
        Axios.post(`/api/v1/u/:id/toggleFollow`)
            .then(res => {
                if (res.success) {
                    
                }
                console.log(res)
            }).catch(err => {
				console.log(err)
			})
    }
	render () {
		return (
            <a onClick={this.follow} className="{followed ? 'followed': 'follow'}">关注</a>
		)
	}
}

export default FollowBtn