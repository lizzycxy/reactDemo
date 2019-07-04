import React, { Component } from 'react';
import "./App.css"
import AppRouter from "./router/AppRouter"
import { Provider } from "react-redux";
import store from "./redux/index";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
