import React from "react";
import { Route } from "react-router-dom";
import Echarts from "../pages/info/echarts";
import ToolsTodolist from "../pages/info/toolsTodolist";
import ToolsCounter from "../pages/info/toolsCounter";
import Table from "../pages/info/table";
import Active from "../pages/info/active";


function InfoRouter() {
    return (
        <>
            <Route path="/info/echarts" exact component={Echarts} />
            <Route path="/info/tools-todolist" exact component={ToolsTodolist} />
            <Route path="/info/tools-conuter" exact component={ToolsCounter} />
            <Route path="/info/table" exact component={Table} />
            <Route path="/info/active" exact component={Active} />
        </>
    );
}

export default InfoRouter;