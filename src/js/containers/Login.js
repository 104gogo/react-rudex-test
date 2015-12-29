import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from '../components/common/Button';

import * as LoginActions from '../actions/login';

class Login extends Component {
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
								<input id="js_useremail" maxlength="2" data-validate="yes,帐号" type="text" className="input" />
							</div>
							<div className="line">
								<label>密码</label>
								<input id="js_password" type="password" maxlength="64" data-validate="yes,密码" className="input" />
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
        list: state.list
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