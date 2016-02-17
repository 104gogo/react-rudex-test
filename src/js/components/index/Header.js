import React, { Component } from 'react';

class Header extends Component {
	clickUserName(op) {
		this.props.action(op);
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
					<span className="userName js_userName" onClick={ this.clickUserName.bind(this, isClick) }>{ username }</span>
				</div>
				{ isClick? <div className="fr user js_userName_box" >
					<ul className="nameBox js_nameBox_list">
						<li onClick={ this.clickUserName.bind(this, isClick) }><span className="userName js_userName">{ username }</span></li>
						<li className="js_update_password">修改密码</li>
						<li className="js_update_user">修改资料</li> 
						<li className="js_logout">退&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出</li> 
					</ul>   
				</div>: '' }
			</div>
		</div>
	}
}

export default Header;