const validPassSuccess = (valid) => ({ type: 'VALIDATION', valid })

export function validPass(valid) {
	return dispatch => {
		dispatch(validPassSuccess(valid));
	}
}

export function visibleMenu() {
	return dispatch => (dispatch({ type: 'VISIBLE' }))
}