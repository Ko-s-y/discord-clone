import React from 'react'
import "./ChatMessage.scss"
import { Avatar } from '@mui/material'

function ChatMessage() {
  return (
    <div className='message'>
      <Avatar />
      <div className='messageInfo'>
        <h4>
          Ko-s-y
          <span className='messageTimestamp'>2022/12/31</span>
        </h4>
        <p>メッセージ本文</p>
      </div>
    </div>
  )
}

export default ChatMessage
