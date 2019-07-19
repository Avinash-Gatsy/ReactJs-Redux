import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class FirstComponent extends Component{
    static defaultProps = {
        message : 'Default message'
    }
    render(){
      return (<><h1>{this.props.message} {this.props.second}</h1><h2>{this.props.children}</h2></>);
    }
}
// FirstComponent.defaultProps={
//     message : 'Default message'
// }
FirstComponent.propTypes = {
    second: PropTypes.number.isRequired
}
export default FirstComponent;