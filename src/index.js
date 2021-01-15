import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom' 

import store from './store/index'

import App from './App.jsx'
import './assets/styles/reset.css'
import 'animate.css'


ReactDOM.render(
    // function render(){
    <Router>
    <Provider store={store}>
        <App />
    </Provider>
    </Router>,
    document.querySelector('#root')
)
// }

//store.subscribe(render)

//render


//卸载组件
// setTimeout(() => {
//     ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
// },5000)
