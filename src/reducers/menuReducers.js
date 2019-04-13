const initial = {
    valid: false,
    visible: false,
}

export default (state = initial, action) => {

  switch (action.type) {
    case 'VALIDATION':
    	return { ...state, valid: action.valid  }
    case 'VISIBLE':
        return { ...state, visible: true }
    default:
      return state;
  }
};
