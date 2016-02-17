import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '../components/common/Button';
import * as LoginActions from '../actions/login';

class Login extends Component {
	constructor(props, context) {
	    super(props, context);
  	}

	handleUsernameChange(e) {
		var username = e.target.value.trim();

		this.props.actions.userNameChange(username);
	}

	handlePasswordChange(e) {
		var password = e.target.value.trim();

		this.props.actions.passWordChange(password);
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
									value={ this.props.login.username } 
									onChange={ this.handleUsernameChange.bind(this) } />
							</div>
							<div className="line">
								<label>密码</label>
								<input ref="password" 
									type="password" 
									className="input" 
									value={ this.props.login.password } 
									onChange={ this.handlePasswordChange.bind(this) } />
							</div>
						</div>
						
						<div className="line">
							<Button action={ actions.login } name={ '登录' } />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Login);