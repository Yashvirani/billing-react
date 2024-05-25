import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { IconButton } from '@mui/material';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PrintIcon from '@mui/icons-material/Print';

import "./Home.css";

function Home() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className='home'>
      <Sidebar />
      <div className='home_right'>
          <Topbar />
          <div className='home_right_bottom'>
             <div className='home_right_bottom_1'>
                <div className='home_right_bottom_1-1'>
                    <div className='home_right_bottom_1-1-left'>
                        <FormControl fullWidth>
                          <InputLabel style={{fontSize : '2vh',paddingBottom : '1vh'}}  id="demo-simple-select-label">Select</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                          >
                            <MenuItem style={{fontSize : '2vh'}} value={'This Month'}>This Month</MenuItem>
                            <MenuItem style={{fontSize : '2vh'}} value={'Last Month'}>Last Month</MenuItem>
                            <MenuItem style={{fontSize : '2vh'}} value={'This Quarter'}>This Quarter</MenuItem>
                            <MenuItem style={{fontSize : '2vh'}} value={'This Year'}>This Year</MenuItem>
                            <MenuItem style={{fontSize : '2vh'}} value={'All Sale Invoices'}>All Sale Invoices</MenuItem>
                            <MenuItem style={{fontSize : '2vh'}} value={'Custom'}>Custom</MenuItem>
                          </Select>
                        </FormControl>
                       
                        <input type='date' style={{marginRight: '1vw',width : '14vw'}}></input>
                        <input type='date' style={{marginRight: '1vw',width : '14vw'}}></input>
                    </div>
                    <div className='home_right_bottom_1-1-right'>
                        <div className='graph'>
                            <IconButton>
                              <AnalyticsIcon />
                            </IconButton>
                            <p>Graph</p>
                        </div>
                        <div className='graph'>
                            <IconButton>
                              <AssessmentIcon />
                            </IconButton>
                            <p>Reports</p>
                        </div>
                        <div className='graph'>
                            <IconButton>
                              <PrintIcon />
                            </IconButton>
                            <p>Print</p>
                        </div>
                    </div>
                  
                </div>
                <div className='home_right_bottom_1-2'>

                </div>
             </div>
             <div className='home_right_bottom_2'>

             </div>
          </div>
      </div>
    </div>
  )
}

export default Home;
