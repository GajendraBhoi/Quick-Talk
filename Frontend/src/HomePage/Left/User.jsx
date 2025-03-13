import React from 'react'

const User = () => {
  return (
    <div className='flex gap-7'>
        <div className="avatar avatar-online">
            <div className="w-15 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>
        <div>
            <h1>Name</h1>
            <span>Email id</span>
        </div>
    </div>
  )
}

export default User