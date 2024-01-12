import React from 'react'
import "./SidebarFooter.scss"
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import { auth } from '../../firebase';
import { useAppSelector } from '../../app/hooks';

function SidebarFooter() {
  const user = useAppSelector((state) => state.user);

  return (
    <div className='sidebarFooter'>
      <div className='sidebarAccount'>
        <img src={ user?.photo } alt='' onClick={() => auth.signOut()} />
        <div className='accountName'>
          <h4>{ user?.displayName }</h4>
          <span>#{ user?.uid.substring(0, 4) }</span>
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
