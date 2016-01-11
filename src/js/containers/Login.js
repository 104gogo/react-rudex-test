import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from '../components/common/Button';

import * as LoginActions from '../actions/login';

class Login extends Component {
	constructor(props, context) {
	    super(props, context)

	    this.state = {
	      	username: this.props.login.username || '',
	      	password: this.props.login.password || ''
	    }
  	}

	handleUsernameChange(e) {
		var username = e.target.value.trim();

		this.setState({username: username});

		this.props.actions.userNameChange(username);
	}

	handlePasswordChange(e) {
		var password = e.target.value.trim();

		this.setState({password: password});

		this.props.actions.passWordChange(username);
	}

	render() {
		const { login, actions } = this.props;

		return (
			<div className="login">
				<div className="loginBox">
					<div className="loginTitle">
						运力科技研发管理系统
					</div>
					<div className="loginContent">
						<div>
							<div className="line">
								<label>帐号</label>
								<input ref="username"
									type="text"
									className="input" 
									value={this.state.username} 
									onChange={this.handleUsernameChange.bind(this)} />
							</div>
							<div className="line">
								<label>密码</label>
								<input ref="password" 
									type="password" 
									className="input" 
									value={this.state.password} 
									onChange={this.handlePasswordChange.bind(this)} />
							</div>
						</div>
						
						<div className="line">
							<Button actions={actions} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Login;

function mapStateToProps(state) {
    return {
        login: state.login
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(LoginActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)