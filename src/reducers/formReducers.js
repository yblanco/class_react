const initial = {
	value: '',
	disabled: true,
	msg: '',
}

const pass = 'Active';

export default (state = initial, action) => {
	let msg;
	let disabled;
  switch (action.type) {
    case 'CHANGE_VALUE':
    	disabled = true;
    	if(action.value.length >= 3) {
    		disabled = false;
    	}
    	return { ...state, value: action.value, disabled, }
    case 'CLICK_BUTTON':
    	msg = 'Error en clave';
    	if(state.value === pass) {
    		msg = 'Bienvenido';
    	}
    	return { ...state, msg: msg, }
    default:
      return state;
  }
};
