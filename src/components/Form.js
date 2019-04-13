import React from 'react';

const Form = ({ disabled, value, onChange, onClick })=> {
	return (
		<div>
			<label htmlFor="input">Your message: </label>
			<input id="input" type="password" value={value} onChange={onChange} />
			<button disabled={disabled} onClick={onClick}>
				Send
			</button>  
		</div>
	)
}

export default Form