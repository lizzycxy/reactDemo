import React from "react";
import { Table } from 'antd';
import {handleData, handlecolumns} from "../data/tableData";

class TableItem extends React.Component {
    render() {
        return (
            <Table
                columns={handlecolumns()}
                dataSource={handleData()}
                pagination={{ pageSize: 50 }} 
                scroll={{ y: 380 }}
            />
        )
    }
}

export default TableItem;