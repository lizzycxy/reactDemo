import React from "react";

class CounterShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <h1
                style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 }}
            >You clicked {this.state.count} times!!
            </h1>
        )
    }
}

export default CounterShow;