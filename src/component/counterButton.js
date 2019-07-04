import React from "react";
import { Button, Icon } from 'antd';
import { connect } from "react-redux";
import { increment, decrement } from "../redux/counter/actions";
const ButtonGroup = Button.Group;

class CounterButton extends React.Component {
    render() {
        return (
            <ButtonGroup style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    onClick={() => this.props.increment()}
                    style={{ width: 100 }} type="primary">
                    <Icon type="plus" />
                </Button>
                <Button
                    onClick={() => this.props.decrement()}
                    style={{ width: 100 }} type="primary">
                    <Icon type="minus" />
                </Button>
            </ButtonGroup>
        )
    }
}
const mapStateToProps = state => ({
    count: state.count
})
const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
})
export default connect(mapStateToProps, mapDispatchToProps)(CounterButton);
