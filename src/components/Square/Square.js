import React, {Component} from 'react';

import classes from './Square.module.css';

 
  class Square extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }
  
    render() {
      return (
        <button className = {classes.Square} onClick = {this.props.onClick}>
          {this.props.value}
        </button>
      );
    }
  }
  

  export default Square;