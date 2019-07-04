import React from "react";
import { Radio } from "antd";
import { connect } from "react-redux";
import { toggle } from "../redux/todoList/actions";
const { Group } = Radio;

class Filter extends React.Component {
    static defaultProps = {
        filter: "All",
        toggle: () => { },
        total: () => 0,
        completedTodo: () => 0
    }
    onChange = e => {
        this.setState({
            filter: e.target.value,
        });
    };
    completedTodo() {
        return this.props.todos.filter(item => item.completed).length
    }
    total() {
        return this.props.todos.length
    }
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Group onChange={this.onChange} value={this.props.filter}>
                    <Radio
                        onClick={e => this.props.toggle(e.target.value)}
                        value={'All'}>All</Radio>
                    <Radio
                        onClick={e => this.props.toggle(e.target.value)}
                        value={'Completed'}>Completed</Radio>
                    <Radio
                        onClick={e => this.props.toggle(e.target.value)}
                        value={'Active'}>Active</Radio>
                </Group>
                <span>{this.completedTodo()}/{this.total()}</span>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    filter: state.filter,
    todos: state.todos
})
const mapDispatchToProps = dispatch => ({
    toggle: (filter) => dispatch(toggle(filter))
})
export default connect(mapStateToProps, mapDispatchToProps)(Filter); 