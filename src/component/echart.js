import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { getEchartOption } from "../echrats/echartOptin";

class LineMarkerEcharts extends React.Component {
    render() {
        return (
            <ReactEcharts
                option={getEchartOption()}
                style={{ height: '500px', width: '1200px' }}
            />
        );
    }
};

export default LineMarkerEcharts;
