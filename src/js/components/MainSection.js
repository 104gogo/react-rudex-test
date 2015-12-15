import React from 'react';
import Item from './Item';

class MainSection extends React.Component {
	renderList(list) {
		return list.map((item) => <Item item={ item }/>);
	}

	render() {
		const { list, actions } = this.props;

		return (
			<ul>
				{this.renderList(list)}
			</ul>
		)
	}
}

export default MainSection;