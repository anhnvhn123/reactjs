import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class ColorBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shape : "square",
            color : "green"
        }
        this.handleBoxClick = this.handleBoxClick.bind(this)
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return nextState;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    handleBoxClick() {
        this.setState({ color: 'red'})
    }

    render() {
        const {color} = this.state
        return (
            <div
                className ="color-box"
                style={{ backgroundColor: color, with : '100px', height: '100px' }}
                onClick = {this.handleBoxClick}
            >
                
            </div>
        );
    }
}

// ColorBox.propTypes = {

// };

export default ColorBox;