import * as utils from "../utils";
export function handlecolumns() {
    const columns = [
        {
            title: 'City',
            dataIndex: 'name',
            key: 'name',
            width: '8%',
        },
        {
            title: 'Clouds',
            dataIndex: 'clouds',
            key: 'clouds',
            width: '7%',
        },
        {
            title: 'Coord',
            dataIndex: 'coord',
            key: 'coord',
            width: '15%',
        },
        {
            title: 'Main',
            dataIndex: 'main',
            key: 'main',
            width: '40%',
        },
        {
            title: 'Wind',
            dataIndex: 'wind',
            key: 'wind',
            width: '20%',
        },
    ];
    return columns;
}
export function handleData() {
    const data = utils.handleDataToTable()
    return data
}

