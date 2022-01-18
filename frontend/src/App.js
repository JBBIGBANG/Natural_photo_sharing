import React from "react";
           
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NewPlaces from "./places/pages/NewPlaces";

import Users from "./user/pages/Users";

const App = () => {
    return (
        <Router>
          
            <Routes>
                    <Route path="/" element={<Users/>} />
                    <Route path="/places/new" element={<NewPlaces />} />   
                    
            </Routes>
           
       </Router>
    );
};

export default App;