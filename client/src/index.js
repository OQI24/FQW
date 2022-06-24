import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Auth} from "./Pages/Authorization/auth";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
      <BrowserRouter>
          <Routes>
              <Route exact path={'/auth'} element={<Auth/>}/>
              <Route path={'/*'} element={<App/>}/>
          </Routes>
     </BrowserRouter>
);
