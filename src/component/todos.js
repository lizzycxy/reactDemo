import React from "react";
import { connect } from "react-redux";
import { completedTodo } from "../redux/todoList/actions";
import { List } from "antd";
import "../styles/todos.css";

class Todos extends React.Component {
    static defaultProps = {
        todos: [1, 2, 3, 4, 5, 6]
    }
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', height: 160, marginTop: 20, marginBottom: 40, overflow: 'hidden', }}>
                <div
                    className='content'
                >
                    <List
                        style={{ width: 280 }}
                        dataSource={this.props.todos}
                        renderItem={item => (
                            <List.Item 
                            onClick={e => this.props.completedTodo(item.id)}
                            key={item.id}
                            className={item.completed ? "completed" : ""}>
                                {item.text}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        )
    }
}
const filterData = (todos, filter) => {
    switch (filter) {
      case "Completed": return todos.filter(item => item.completed); break;
      case "Active": return todos.filter(item => !item.completed); break;
      default: return todos;
    }
  } 
const mapStateToProps = state => ({
    todos: filterData(state.todos,state.filter)
})
const mapDispatchToProps = dispatch => ({
    completedTodo:(id) => dispatch(completedTodo(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Todos);