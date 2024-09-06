import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


import MuiStudents from './Students';
import Dashboard from './Dashboard';
import Programs from './Programs';
import Courses from './Courses';

export default function Navigations(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/students" element={<MuiStudents />} />
                    <Route path="/programs" element={<Programs />} />
                    <Route path="/courses" element={<Courses />} />
            
                </Routes>
            </BrowserRouter>

        </div>
    )
}