import { validPass, visibleMenu } from './menuActions';

const pass = 'Active';
const changeValueSuccess = (value) => ({ type: 'CHANGE_VALUE', value });

export function changeValue(e) {
	return dispatch => {
		const { value } = e.target;
		let valid = false;
		if(value === pass){
			valid = true;
		}
		dispatch(changeValueSuccess(e.target.value))
		dispatch(validPass(valid));
	}
}

export function onClickButton() {
	return dispatch => {
		dispatch({ type: 'CLICK_BUTTON', pass })
		dispatch(visibleMenu())
	}
}