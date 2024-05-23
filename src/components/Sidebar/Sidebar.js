import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CategoryIcon from '@mui/icons-material/Category';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SellIcon from '@mui/icons-material/Sell';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Avatar from '@mui/joy/Avatar';


import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar' >
      <div className='side_avatar'>
         <Avatar />
         <p style={{marginLeft : '1vw'}}>Company</p>
      </div>
      <div className='side_function'>
         <HomeIcon />
         <p style={{marginLeft : '1vw'}}>Home</p>
      </div>
      <div className='side_function'>
         <PeopleAltIcon />
         <p style={{marginLeft : '1vw'}}>Parties</p>
      </div>
      <div className='side_function'>
         <CategoryIcon />
         <p style={{marginLeft : '1vw'}}>Items</p>
      </div>
      <div className='side_function'>
         <ReceiptIcon />
         <p style={{marginLeft : '1vw'}}>Sale</p>
      </div>
      <div className='side_function'>
         <ShoppingCartIcon />
         <p style={{marginLeft : '1vw'}}>Purchase</p>
      </div>
      <div className='side_function'>
         <SellIcon />
         <p style={{marginLeft : '1vw'}}>Quick Billing</p>
      </div>
      <div className='side_function'>
         <AttachMoneyIcon />
         <p style={{marginLeft : '1vw'}}>Expenses</p>
      </div>
      <div className='side_function'>
         <AttachMoneyIcon />
         <p style={{marginLeft : '1vw'}}>Cash & Bank</p>
      </div>
      <div className='side_function'>
         <AttachMoneyIcon />
         <p style={{marginLeft : '1vw'}}>Reports</p>
      </div>
    </div>
  )
}

export default Sidebar;
