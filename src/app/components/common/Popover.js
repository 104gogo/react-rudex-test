import Tooltip from 'rc-tooltip';
import React, { Component } from 'react';

class Popover extends Component {
	getOverlay() {
	    return (
	    	<div>
	    		{ this.props.overlay }
			</div>
	    );
  	}

	render() {
		return (
			<Tooltip 
				placement='bottom' 
				trigger={ ['click'] } 
				overlay={ this.getOverlay() }>
					{ this.props.children }
			</Tooltip>
		);
	}
}

export default Popover;