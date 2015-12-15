import React from 'react';

class TextInput extends React.Component {

	handleText(e) {
		var text = e.target.value.trim();

		if(e.which == 13) {
			this.props.onSave(text);
		}
	}

	render() {
		return (
			<input placeholder={this.props.placeholder} 
			onKeyDown={this.handleText.bind(this)} />
		)
	}
}

export default TextInput;
