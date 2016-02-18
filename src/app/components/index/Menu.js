import React, { Component } from 'react';

class Menu extends Component {
	render() {
		return <div className="menu-list">
			<ul>
				<a href="#index">
					<li className="home header_active">
						<span className="home-active"></span>
						<div className="longen"><label></label><p>首页</p></div>
					</li>
				</a>
				<a href="#apiManage">
					<li className="manage">
						<span className=""></span>
						<div className="longen"><label></label><p>API管理</p></div>
					</li>
				</a>
				<a href="#mock/mockManage">
					<li className="mock">
						<span className=""></span>
						<div className="longen"><label></label><p>mock</p></div>
					</li>
				</a>
				<a href="#test/testCase">
					<li className="test">
						<span className=""></span>
						<div className="longen"><label></label><p>test</p></div>
					</li>
				</a>
				<a href="#system/setApi">
					<li className="set">
						<span className=""></span>
						<div className="longen"><label></label><p>设置</p></div>
					</li>
				</a>
			</ul>
		</div> 
	}
}

export default Menu;