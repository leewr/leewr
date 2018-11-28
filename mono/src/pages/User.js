import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../comp/header.js'
import store from '../store'
import { loginOutRquest } from '../actions'
import './user/user.scss'
const ImageHost = window.location.host.indexOf('leewr.com') > -1 ? 'http://www.leewr.com' : 'http://localhost:7001'

export function userAuthoried (user, props) {

}

class User extends Component {
    constructor (props) {
        super(props)
        if (window.sessionStorage.userState) {
            this.state = {
                userState: JSON.parse(window.sessionStorage.userState)
            }
            
        } else {
            this.state = {
                userState: store.getState().userState
            }
        }
        console.log(this.state.userState)
        if (!this.state.userState.id) {
			this.props.history.replace('/login')
		}
    }
    loginOut () {
        const { dispatch } = this.props
        dispatch(loginOutRquest({}, () => {
            this.props.history.push('/')
        }))
    }

    render () {
        return(
            <div className="user">
                <Header title="我"/>
                <div className="userBox">
                    <div className="userHead">
                        <div className="name">{this.state.userState.username}</div>
                        <div className="avatar">
                            <img src={ImageHost + this.state.userState.avatarUrl}/>
                        </div>
                    </div>
                    <div className="userInfo">
                        <div>
                            <h3>关注</h3>
                            <p>{this.state.userState.followNum}</p>
                        </div>
                        <div>
                            <h3>粉丝</h3>
                            <p>{this.state.userState.fansNum}</p>
                        </div>
                        <div>
                            <h3>被赞</h3>
                            <p>{this.state.userState.likeNum}</p>
                        </div>
                    </div>
                </div>
                <div className="tab">
                    <span>动态</span>
                    <span>草稿</span>
                    <span className="active">更多</span>
                </div>
                <div className="tabcontent">
                    <div className="content">
                        <ul className="list">
                            <li>
                                <span>我喜欢的文章</span>
                                <span className="num">{this.state.userState.id}</span>
                            </li>
                            <li>
                                <span>我的草稿箱</span>
                                <span className="num">{this.state.userState.id}</span>
                            </li>
                            <li>
                                <span>给锐读提意见</span>
                            </li>
                        </ul>
                        <div className="loginOut" onClick={this.loginOut.bind(this)}>登出应用</div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
	const { userState } = state
	return {
		userState
	}
}

export default connect(mapStateToProps)(User)