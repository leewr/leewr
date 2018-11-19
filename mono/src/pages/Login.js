import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginRequest } from '../actions'
import store from '../store'
// import Axios from '../utils/request.js'

import './login/login.scss'

class Login extends Component {
	constructor (props) {
		super(props)
		this.state = {
			userName: '',
			password: '',
			loginState: false
		}
		if (store.getState().userState) {
			console.log(this.props.history)
			// this.props.history.push('/focus')
		}
	}
	onChange (type, event) {

		this.setState({[type]: event.target.value}, () => {
			let arr = [this.state.userName, this.state.password]
			if (arr.every((val) => {return val})) {
				this.setState({'loginState': true})
			} else {
				this.setState({'loginState': false})
			}
		})
		
		
	}
	login () {
		const { dispatch, userState } = this.props
		const params = {'username': this.state.userName, 'password': this.state.password}

		if (this.state.loginState) {
			dispatch(loginRequest(params, () => {
				this.props.history.push('/')
			}))
		}
	}
	render () {
		return (
			<div className="loginBox">
				<div className="loginHead">
					<div className="return"></div>
					<h1>锐读</h1>
				</div>
				<div className="loginForm">
					<div className="userName inputItem">
						<label>O</label>
						<input placeholder="请输入手机号码" defaultValue={this.state.userName} onChange={this.onChange.bind(this, 'userName')}/>
					</div>
					<div className="password inputItem">
						<label>O</label>
						<input placeholder="请输入密码" defaultValue={this.state.password} onChange={this.onChange.bind(this, 'password')}/>
					</div>
					<div className="forgetBox">
						<Link className="forget" to={'/login/forget'}>忘记密码</Link>
					</div>
					<div className={`loginBtn ${this.state.loginState ? "active" : ""}`} onClick={this.login.bind(this)}>登录</div>
					<p className="register">还没有账号？ <Link to={'/register'}>现在注册</Link></p>
				</div>
				<div className="footer">
					<p>登录即代表您同意<Link to="/user/agreement">用户协议</Link></p>
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
export default connect(mapStateToProps)(Login)