import React, { Component } from 'react';
import Popover from '../common/Popover';

class Header extends Component {
	clickUserName(op) {
		this.props.action(op);
	}

	getOverlay(username) {
		return (
			<div className="fr user js_userName_box">
				<ul className="nameBox">
					<li><span className="userName">{ username }</span></li>
					<li>修改密码</li>
					<li>修改资料</li> 
					<li>退&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出</li> 
				</ul>     
			</div>
		);
	}

	render() {
		const { username, isClick } = this.props.header;

		return <div className="top-common">
			<div className="header">
				<h1 className="fl">
					<a href="#index"><span className="logo"></span></a>
					<p className="fr">运力科技研发管理系统</p>
				</h1>
				
				<div className="fr user">
					<Popover 
						overlay={ this.getOverlay(username) }>
						<span>{ username }</span>
					</Popover>
				</div>
			</div>
		</div>
	}
}

export default Header;