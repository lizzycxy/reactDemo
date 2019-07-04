import React from "react";
import { Card } from "antd";
import AddTodo from "../../component/addTodo";
import Todos from "../../component/todos";
import Filter from "../../component/filter";
class ToolsTodolist extends React.Component {
    render() {
        return (
            <div
                style={{ background: '#ECECEC', padding: '30px', height: 500, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Card hoverable={true} title="Todolist Tools" bordered={false} style={{ width: 500, height: 400 }}>
                    <div>
                        <AddTodo />
                        <Todos />
                        <Filter />
                    </div>
                </Card>
            </div>
        )
    }
}

export default ToolsTodolist;