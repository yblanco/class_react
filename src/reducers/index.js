import { combineReducers } from 'redux';

import form from './formReducers';
import menu from './menuReducers';

const reducers = {
	form,
	menu,
}

export default combineReducers(reducers)