import React from 'react'
import "./Chat.scss"
import ChatHeader from './ChatHeader'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'

function Chat() {
  return (
    <div className='chat'>
      {/* chatHeader */}
      <ChatHeader />

      {/* chatMessage */}
      <div className='chatMessage'>
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>

      {/* chatInput */}
      <ChatInput />
    </div>
  )
}

export default Chat
