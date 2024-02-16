import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import Navbar from './Navbar';
import Home from './Home';
import NotFound from './NotFound';
import Signup from './Signup';
import LoginPg from './Login';
import logo from    './logo.svg'
// import Script from "./Script"
import { BrowserRouter, Route, Routes} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
<Navbar/>
      <Routes>
        <Route path='' element={<Home />} />

        <Route path='/Signup' element={<Signup />} />

        <Route path='/Login' element={<LoginPg/>} />

   

        <Route path='*' element={<NotFound />} />
      </Routes>

      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
