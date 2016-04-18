import React, { Component } from 'react';
import Table from 'antd/lib/table';
import '../../../../public/css/antd.css';

export class ProductTable extends Component {
	componentWillMount() {
		this.props.getProducts();
	}

	render() { 
		const { datas } = this.props;
		
		const dataSource = datas;
		const columns = [
			{
			  	title: '产品名称',
			  	dataIndex: 'productName',
			  	key: 'productName',
			}, 
			{
			  	title: '产品简称',
			  	dataIndex: 'code',
			  	key: 'code',
			}, 
			{
			  	title: '版本数',
			  	dataIndex: 'versionCount',
			  	key: 'versionCount',
			},
			{
			  	title: '更新时间',
			  	dataIndex: 'updateTime',
			  	key: 'updateTime',
			}
		];

		return <Table dataSource={ dataSource } columns={ columns } />
	}
}