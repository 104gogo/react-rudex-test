const initialState = {
	username: 'gogo',
	password: 123
};	

export default function login(state = initialState, action) {
  	 switch (action.type) {
  		case 'LOGIN':

  			return ;
    	default:
      		return state
  	}
}
