import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ProductTable } from '../../components/common/Table';
import * as MainActions from '../../actions/main';
import './main.scss';

class Main extends Component {
    render() {
    	const { datas, actions } = this.props;

        return (
        	<div id="container">
				<div className="content index mbSix">
					<div className="block-box fl">
						<div className="apiType-title title">
							<div className="fl">
								<input id="js_searchInput" className="default-border" placeholder="输入关键字" />
								<button id="js_searchBtn" className="green-btn search-btn">查询</button>
								<a href="javascript:;" id="js_about_me" className="about_me">我负责的</a>
							</div>
							<a href="javascript:;" className="smallAddBtn fr">添加产品</a>
							<a href="javascript:;" className="smallAddBtn fr">添加版本</a>
							<a href="javascript:;" className="smallAddBtn fr">添加API</a>
						</div>
						<div className="apiType-content block-content">
							<ProductTable datas={ datas } getProducts={ actions.getProducts } />
						</div>
					</div>
					<div className="fr news">
						<div className="index-info mine block-box">
							<div className="btn">1</div>
						</div>
						<div className="index-info latest block-box">
					
						</div>
					</div>
				</div>
			</div>
        )
    }
}  

function mapStateToProps(state) {
    const { datas, pn, keyword, charged } = state.main.toJS();

    return {
        datas,
        pn,
        keyword,
        charged
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(MainActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);