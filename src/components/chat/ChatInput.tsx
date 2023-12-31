import React from 'react'
import "./ChatInput.scss"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function ChatInput() {
  return (
    <div  className='chatInput'>
      <AddCircleOutlineIcon />
      <form action="">
        <input type="text" placeholder='#Reactへメッセージを送信' />
        <button type='submit' className='chatInputButton'>
          送信
        </button>
      </form>

      <div className='chatInputIcons'>
        <CardGiftcardIcon />
        <GifIcon />
        <EmojiEmotionsIcon />
      </div>
    </div>
  )
}

export default ChatInput
