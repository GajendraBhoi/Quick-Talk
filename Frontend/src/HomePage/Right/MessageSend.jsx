import React from 'react'
import { IoSend } from "react-icons/io5";
const MessageSend = () => {
    return (
        <div className='flex h-[8vh]'>
            <div className='w-[70%]'>
                <input type="text" placeholder="neutral" className="input input-neutral" />
            </div>
            <button>
                <IoSend />
            </button>
        </div>
    )
}

export default MessageSend