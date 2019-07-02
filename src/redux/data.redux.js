import axios from "axios";
const jsonUrl = "http://api.openweathermap.org/data/2.5/group?id=4887398,4684888,5809844,5419384,5128581,5780993,5506956,5391959,4930956,4180439&appid=30b3db4152f8ddd4bd894e9ea5be2246&units=imperial";

const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';

export function data(state = [], action) {
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return [...state, ...action.payload ]
        default:
            return state;
    }
}

export function getJsonData(data) {
    if(data){
        return { type: GET_DATA_SUCCESS, payload: data }
    }
    return {type: GET_DATA_SUCCESS}
}

export function getJsonDataAsync() {
    return dispatch => {
        axios.get(jsonUrl).then(res => {
            dispatch(getJsonData(res.data.list))
        }).catch(err => {
            console.log(err);
        })
    }
}