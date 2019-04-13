import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";


class Menu extends Component {

	render () {
		if(this.props.menu.valid && this.props.menu.visible){
			return (
				<div>
					<ContextMenuTrigger id="some_unique_identifier">
		        <div className="well">Right click to see the menu</div>
		      </ContextMenuTrigger>
					<ContextMenu id="some_unique_identifier">
					  <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
					    ContextMenu Item 1
					  </MenuItem>
					  <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
					    ContextMenu Item 2
					  </MenuItem>
					  <MenuItem divider />
					  <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
					    ContextMenu Item 3
					  </MenuItem>
					</ContextMenu>
				</div>
			)
		}else if(this.props.menu.visible && !this.props.menu.valid){
			return (
				<div>{this.props.form.msg}</div>
			)
		}else{
			return (
				<div>Por favor inicie sesion</div>
			)
		}
	}

}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(Menu);