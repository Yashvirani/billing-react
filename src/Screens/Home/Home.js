import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';

import "./Home.css";

function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className='home_right'>
          <Topbar />
          <div className='home_right_bottom'>
             <div className='home_right_bottom_1'>

             </div>
             <div className='home_right_bottom_2'>

             </div>
          </div>
      </div>
    </div>
  )
}

export default Home;
