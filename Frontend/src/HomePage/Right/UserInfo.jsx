import React from 'react'

const UserInfo = () => {
    return (
        <div className='flex justify-center bg-blue-400 h-[8vh]'>
            <div className="avatar avatar-online">
                <div className="w-15 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div>
                <h1>
                    Name
                </h1>
                <span>
                    Current status (online)
                </span>
            </div>
        </div>
    )
}

export default UserInfo