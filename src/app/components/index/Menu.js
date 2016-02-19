import React, { Component } from 'react';
import R from 'ramda';
import { Link } from 'react-router';

class Menu extends Component {
	render() {
		const { location } = this.props;
		const route = R.compose(R.last, R.split('/'))(location.pathname);

		return <div className="menu-list">
			<ul>
				<Link to="app/index">
					<li className={ route == 'index'? 'home header_active': 'home' }>
						<span className={ route == 'index'? 'home-active': '' }></span>
						<div className="longen"><label></label><p>首页</p></div>
					</li>
				</Link>
				<Link to="app/api">
					<li className={ route == 'api'? 'manage header_active': 'manage' }>
						<span className={ route == 'api'? 'manage-active': '' }></span>
						<div className="longen"><label></label><p>API管理</p></div>
					</li>
				</Link>
				<a href="#mock/mockManage">
					<li className="mock { route == 'mock'? 'header_active': '' }">
						<span className="mock_active"></span>
						<div className="longen"><label></label><p>mock</p></div>
					</li>
				</a>
				<a href="#test/testCase">
					<li className="test { route == 'test'? 'header_active': '' }">
						<span className="test_active"></span>
						<div className="longen"><label></label><p>test</p></div>
					</li>
				</a>
				<a href="#system/setApi">
					<li className="set { route == 'set'? 'header_active': '' }">
						<span className="set_active"></span>
						<div className="longen"><label></label><p>设置</p></div>
					</li>
				</a>
			</ul>
		</div> 
	}
}

export default Menu;