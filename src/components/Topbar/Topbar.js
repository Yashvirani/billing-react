import React from 'react';
import "./Topbar.css";
import AddIcon from '@mui/icons-material/Add';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton } from '@mui/material';

function Topbar() {
  return (
    <div className='topbar'>
        <div className='button_group'>
            <div className='top_add_sale'>
                <AddIcon />
                <p>Add Sale</p>
            </div>
            <div className='top_add_purchase'>
                <AddIcon />
                <p>Add Purchase</p>
            </div>
            <div style={{marginRight : '0.6vw'}}>
                <IconButton>
                   <WhatsAppIcon />
                </IconButton>
            </div>
            <div>
                <IconButton>
                   <SettingsIcon />
                </IconButton>
            </div>
        </div>
       
    </div>
  )
}

export default Topbar
