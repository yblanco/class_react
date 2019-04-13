import React, { Component } from 'react';
import Home from './containers/Home';
import Menu from './containers/Menu';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: 'home',
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(menu='home') {
    this.setState({active: menu});
  }

  render() {
    let show;
    switch (this.state.active) {
      case 'menu':
        show = <Menu />;
        break;
      default:
        show = <Home />;
    }
    return (
      <div className="App">
        <h1>{this.props.name}</h1>
        <div>
          <span onClick={()=>{this.onClick()}}>
            Home
          </span>
          |
          <span onClick={()=>{this.onClick('menu')}}>
            Menu
          </span>
        </div>
        {show}
      </div>
    );
  }
}

export default App;
