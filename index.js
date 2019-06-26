
import { Provider } from "react-redux"
import { render } from "react-dom"
import React, { Component } from "react"
//import * as View from "./view"
import store from "./src/store"
import App from "./src/App"
//import { prependOnceListener } from "cluster";


store.subscribe(() => console.log(store.getState()))



render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
)


