import React from 'react';

class Item extends React.Component {
	render() {
		return (
			<li>
				{ this.props.item.text }
			</li>
		)
	}
}

export default Item;