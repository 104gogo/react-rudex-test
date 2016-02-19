import React, { Component } from 'react';
import { Table } from 'antd';
import '../../../../public/css/antd.css';

export class ProductTable extends Component {
	componentWillMount() {
		this.props.getProducts();
	}

	render() { 
		console.log(this.props)
		const dataSource = [{
		  key: '1',
		  productName: '胡彦斌',
		  code: 32,
		  versionCount: '西湖区湖底公园1号',
		  updateTime: '2016-02-19 10:14'
		}, {
		  key: '2',
		  productName: '胡彦祖',
		  code: 42,
		  versionCount: '西湖区湖底公园1号',
		  updateTime: '2016-02-19 10:14'
		}];

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