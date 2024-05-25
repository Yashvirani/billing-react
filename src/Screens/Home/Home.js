import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { IconButton, LinearProgress } from '@mui/material';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PrintIcon from '@mui/icons-material/Print';
import Box from '@mui/material/Box';
import { DataGrid , GridToolbar , GridColDef } from '@mui/x-data-grid';

import "./Home.css";

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  // },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

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
                       
                        <input type='date' 
                               style={{marginRight: '1vw',
                                       width : '14vw',
                                       fontSize : '1.9vh',
                                       paddingLeft : '1vw',
                                       paddingRight : '1vw'
                                      }}>
                        </input>
                        <input type='date'
                                style={{marginRight: '1vw',
                                width : '14vw',
                                fontSize : '1.9vh',
                                paddingLeft : '1vw',
                                paddingRight : '1vw'
                               }}>
                        </input>
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
                <Box sx={{ height: '50vh',
                           width: '95%',
                           marginLeft : '2vw' ,
                           marginRight : '2vw',
                           marginTop : '3vh',
                          //  marginBottom : '2vh'
                          // objectFit : 'contain'
                          overflowY : 'scroll'
                          }}>
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                      pagination: {
                        paginationModel: {
                          pageSize: 5,
                        },
                      },
                    }}
                    pageSizeOptions={[5]}
                    // checkboxSelection
                    disableRowSelectionOnClick
                    slots={{
                      toolbar : GridToolbar,
                      loadingOverlay : LinearProgress
                    }}
                    slotProps={{
                      toolbar : {
                        showQuickFilter : true,
                        quickFilterProps : {
                          debounceMs : 500
                        }
                      }
                    }}
                  />
                </Box>
             </div>
          </div>
      </div>
    </div>
  )
}

export default Home;
