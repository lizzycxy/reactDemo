import React from "react";
import { connect } from "react-redux";
import { Input, Button } from "antd";
import { addTodoTrans } from "../redux/todoList/actions";

class AddTodo extends React.Component {
    render() {
        const textInput = React.createRef();
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Input
                    ref={textInput}
                    style={{ width: 300 }}
                ></Input>
                <Button
                    onClick={() => {
                        const value = textInput.current.state.value;
                        this.props.addTodo(value);
                        textInput.current.state.value = "";
                    }}
                    type="primary">Add Todo</Button>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    state
})
const mapDispatchToProps = dispatch => ({
    addTodo: (text) => dispatch(addTodoTrans(text))
})
export default connect(mapStateToProps,mapDispatchToProps)(AddTodo);