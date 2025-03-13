import React from 'react'
import UserInfo from './UserInfo'
import Messeges from './Messeges'
import MessageSend from './MessageSend'

const Right = () => {
  return (
    <div className='bg-black w-[70%] text-white'>
      <UserInfo />
      <div className='flex-1 overflow-y-auto' style={{ maxHeight: "calc(92vh - 8vh)" }}>
        <Messeges />
      </div>

      <MessageSend />
    </div>
  )
}

export default Right