import './App.css';
import axios from 'axios';
import react , {useState} from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import SignIn from './Screens/SignIn';
import Sidebar from './components/Sidebar/Sidebar.js';

function App() {
  
  
  return (
    <BrowserRouter>
      <div className="billing">
        <Routes>
          <Route path="/" Component={Sidebar} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
