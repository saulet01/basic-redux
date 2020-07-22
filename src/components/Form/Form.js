import React, { Component } from "react";

class Form extends Component {
    state = {
        name: "",
        age: ""
    };

    addNameHandler = event => {
        this.setState({
            name: event.target.value
        });
    };

    addAgeHandler = event => {
        this.setState({
            age: event.target.value
        });
    };

    render() {
        let showDiv = null;

        if (this.state.name || this.state.age) {
            showDiv = (
                <div>
                    <p>Name is: {this.state.name}</p>
                    <p>Age is: {this.state.age}</p>
                </div>
            );
        }

        return (
            <div>
                <input name="name" value={this.state.name} onChange={this.addNameHandler} />
                <input name="age" value={this.state.age} onChange={this.addAgeHandler} />
                {showDiv}
                <button onClick={() => this.props.added(this.state.age, this.state.name)}>Add Person and Time</button>
            </div>
        );
    }
}

export default Form;
