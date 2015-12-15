import React from 'react';
import TextInput from './TextInput';

class Header extends React.Component {
	handleSave(text) {
		this.props.actions.addItem(text);
	}

	render() {
		return (
			<header>
				<TextInput onSave={this.handleSave.bind(this)} placeholder="What needs to be done?"/>
			</header>
		)
	}
}

export default Header;
