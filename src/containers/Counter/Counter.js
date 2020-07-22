import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from "../../store/actions";
import Form from "../../components/Form/Form";

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
                <hr />
                <Form added={(age, name) => this.props.onStoreResult(age, name)} />

                {/* <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button> */}

                <ul>
                    {this.props.storedResults.map((strResult, index) => {
                        return (
                            <li key={index} onClick={() => this.props.onDeleteResult(index)}>
                                {strResult.name + " " + strResult.age + " Time: " + strResult.id}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddCounter: () => dispatch({ type: actionTypes.ADD, val: 10 }),
        onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, val: 15 }),
        onStoreResult: (age, name) => dispatch({ type: actionTypes.STORE_RESULT, payload: { name: name, age: age } }),
        onDeleteResult: id => dispatch({ type: actionTypes.DELETE_RESULT, payload: id })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
