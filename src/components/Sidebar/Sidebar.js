import React, {useState} from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CategoryIcon from '@mui/icons-material/Category';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SellIcon from '@mui/icons-material/Sell';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Avatar from '@mui/joy/Avatar';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AssessmentIcon from '@mui/icons-material/Assessment';

import './Sidebar.css';

function Sidebar() {
  let [sales,setSales] = useState(false);
  let [purchase,setPurchase] = useState(false);
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
      <div className='side_function' onClick={() => {
         setSales(!sales);
         setPurchase(false);
      }}>
         <ReceiptIcon />
         <p style={{marginLeft : '1vw'}}>Sale</p>
      </div>
      <div className={sales ? 'sale_dropdown' : 'remove_dropdown'} >
         <div className='sale_dropdown_tab'>
           <p>Sale Invoices</p>
         </div>
         <div className='sale_dropdown_tab'>
           <p>Estimate/Quotation</p>
         </div>
         <div className='sale_dropdown_tab'>
           <p>Payment In</p>
         </div>
         <div className='sale_dropdown_tab'>
            <p>Sale Order</p>
         </div>
         <div className='sale_dropdown_tab'>
            <p>Delivery Challan</p>
         </div>
         <div className='sale_dropdown_tab'>
             <p>Credit Note</p>
         </div>
         
      </div>
      <div className='side_function' onClick={() => {
         setPurchase(!purchase)
         setSales(false);
      }}>
         <ShoppingCartIcon />
         <p style={{marginLeft : '1vw'}}>Purchase</p>
      </div>
      <div className={purchase ? 'sale_dropdown' : 'remove_dropdown'} >
         <div className='sale_dropdown_tab'>
           <p>Purchase Bills</p>
         </div>
         <div className='sale_dropdown_tab'>
           <p>Payment Out</p>
         </div>
         <div className='sale_dropdown_tab'>
           <p>Purchase Order</p>
         </div>
         <div className='sale_dropdown_tab'>
            <p>Purchase Return</p>
         </div>
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
         <AccountBalanceIcon />
         <p style={{marginLeft : '1vw'}}>Cash & Bank</p>
      </div>
      <div className='side_function'>
         <AssessmentIcon />
         <p style={{marginLeft : '1vw'}}>Reports</p>
      </div>
    </div>
  )
}

export default Sidebar;
