import React, { Component, PropTypes } from 'react';

class Button extends Component {

	handleClick(e) {
		this.props.actions.login({username: 'gogo', password: '123'});
	}

	render() {
		return (
			<button onClick={this.handleClick.bind(this)} >登录</button>
		)
	}
}

export default Button;
