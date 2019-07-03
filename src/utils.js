import axios from "axios";
const jsonUrl = "http://api.openweathermap.org/data/2.5/group?id=4887398,4684888,5809844,5419384,5128581,5780993,5506956,5391959,4930956,4180439&appid=30b3db4152f8ddd4bd894e9ea5be2246&units=imperial";

// 获取天气数据存在 session
export function getDataToSession() {
    return new Promise((resolve, reject) => {
        axios.get(jsonUrl).then(res => {
            let setInfo = JSON.stringify(res.data.list)
            sessionStorage.setItem('weatherData', setInfo)
        }).catch(err => {
            reject(err);
        })
    });
}
// 从 session 中获取
export function getDataFromSession() {
    return JSON.parse(sessionStorage.getItem('weatherData'))
}

// 为 Echarts 截取部分数据
export function handleDataToEcharts(key, data) {
    const container = [];
    switch (key) {
        case "name": {
            data.forEach(item => {
                container.push(item[key])
            })
            return container;
        }
        default: {
            data.forEach(item => {
                container.push(item.main[key])
            })
            return container
        }
    }
}

// table 展示数据
export function handleDataToTable() {
    const weatherData = getDataFromSession();
    const container = [];
    weatherData.forEach(item => {
        container.push({
            key:item.id,
            name: item.name,
            clouds: item.clouds.all,
            coord: JSON.stringify(item.coord),
            main: JSON.stringify(item.main),
            wind: JSON.stringify(item.wind)
        })
    })
    return container;
}









