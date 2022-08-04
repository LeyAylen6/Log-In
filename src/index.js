//imports y provider

import React from 'react'
import ReactDOM from 'react-dom/client'
import LogIn from './components/login' 
import SignUp from './components/signup'
import Profile from './components/profile'
import Form from './components/form'
import './styles.css'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const rootReducer = () => console.log("hola")

const root = ReactDOM.createRoot(document.getElementById('root')); 
const store= createStore(rootReducer);

root.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path='/login' element={<LogIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/test' element={<Form />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </Router>
    </Provider>
);


