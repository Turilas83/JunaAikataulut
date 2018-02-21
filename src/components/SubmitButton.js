import React, { Component } from 'react';

class SubmitButton extends Component {
    render(){
        return(
            <form id="submitButton" onSubmit={this.handleSubmit}>
                <input type="text" required ref="newCity"/>
                <input type="submit" value="Hae" />
            </form>
        );
    }

    //Custom functions
    handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.refs.newCity.value);
    }
};

export default SubmitButton;