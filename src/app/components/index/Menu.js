import React, { Component } from 'react';

class Menu extends Component {
	render() {
		return <div className="menu-list">
			<ul>
				<a href="#index"><li className="home header_active"><span className="home-active"></span>
					<div className="longen"> <label></label>首页</div>
				</li></a>
				<a href="#apiManage"><li className="manage"><span className=""></span>
				<div className="longen"> <label></label>API管理</div>
				</li></a>
				<a href="#mock/mockManage"><li className="mock"><span className=""></span>
				<div className="longen"> <label></label>mock</div>
				</li></a>
				<a href="#test/testCase"><li className="test"><span className=""></span>
				<div className="longen"> <label></label>test</div>
				</li></a>
				<a href="#system/setApi"><li className="set"><span className=""></span>
				<div className="longen"> <label></label>设置</div>
				</li></a>
			</ul>
		</div> 
	}
}

export default Menu;