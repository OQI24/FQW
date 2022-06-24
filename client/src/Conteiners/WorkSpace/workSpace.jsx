import React from "react";
import './workSpace.scss'
import {Routes, Route} from "react-router-dom";
import {NewsPage} from "../../Pages/NewsPage/newsPage";


export const WorkSpace = () => {
    return(
        <div className={'wrapWorkSpace'}>
            <Routes>
                <Route path="/" element={<div>{'You are Home'}</div>}/>
                <Route path="/news" element={<NewsPage/>}/>
                <Route path="/tasks" element={<div>{'tasks'}</div>}/>
                <Route path="/mail" element={<div>{'mail'}</div>}/>
                <Route path="/contacts" element={<div>{'contacts'}</div>}/>
                <Route path="/docs" element={<div>{'docs'}</div>}/>
                <Route path="/lernbase" element={<div>{'lernbase'}</div>}/>
                <Route path="/vacancy" element={<div>{'vacancy'}</div>}/>
            </Routes>
        </div>
    );
};


