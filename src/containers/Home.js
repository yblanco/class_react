import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from '../components/Form'

import { changeValue, onClickButton } from '../actions/formActions';


class Home extends Component {

	render () {
		return (
			<div>
				<Form 
	        onClick={this.props.onClickButton} 
	        value={this.props.form.value} 
	        onChange={this.props.changeValue} 
	        disabled={this.props.form.disabled}  
	      />
	      <div>
	      	{this.props.form.msg}
	      </div>
      </div>
		)
	}

}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
	changeValue,
	onClickButton,
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);