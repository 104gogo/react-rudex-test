const initialState = [
  	{
    	text: 'Use Redux',
    	completed: false,
    	id: 0
  	}
];

export default function list(state = initialState, action) {
  	switch (action.type) {
  		case 'ADD_ITEM':
  			return [
  				{
  					text: action.text,
  					completed: false,
  					id: state.reduce((maxId, item) => Math.max(maxId, item.id), -1) + 1
  				}, 
  				...state
  			];
    	default:
      		return state
  	}
}
