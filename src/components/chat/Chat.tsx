import React from 'react'
import "./Chat.scss"
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'

function Chat() {
  return (
    <div className='chat'>
      <ChatHeader />
      {/* chatMessage */}
      <ChatInput />
    </div>
  )
}

export default Chat
