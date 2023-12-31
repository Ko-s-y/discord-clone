import React from 'react'
import "./SidebarFooter.scss"
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';

function SidebarFooter() {
  return (
    <div className='sidebarFooter'>
      <div className='sidebarAccount'>
        <img src='./icon.png' alt='' />
        <div className='accountName'>
          <h4>Ko-s-y</h4>
          <span>#8888</span>
        </div>
      </div>
      <div className='sidebarVoice'>
        <MicIcon />
        <HeadphonesIcon />
        <SettingsIcon />
      </div>
    </div>
  )
}

export default SidebarFooter
