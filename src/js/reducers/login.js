

export default function login(state = {}, action) {
  	 switch (action.type) {
  		case 'LOGIN':
        console.log('reduce login');
  			return ;
    	default:
      		return state
  	}
}
