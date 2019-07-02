import axios from "axios";
const jsonUrl = "http://api.openweathermap.org/data/2.5/group?id=4887398,4684888,5809844,5419384,5128581,5780993,5506956,5391959,4930956,4180439&appid=30b3db4152f8ddd4bd894e9ea5be2246&units=imperial";

export function getJsonData() {
    axios.get(jsonUrl)
        .then(res => {
            console.log(res.data.list);
        })
}