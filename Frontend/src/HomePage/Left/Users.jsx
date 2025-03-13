import React from 'react'
import User from './user'

const Users = () => {
  return (
    <div>
        <h1>Messages</h1>
        {/* flex-1 is defined in index.css  */}
        <div className='flex-1 overflow-y-auto' style={{maxHeight :"calc(84vh - 10vh)"}}>
        <User/><User/><User/><User/><User/><User/><User/><User/><User/><User/><User/><User/><User/><User/>
        </div>
    </div>
  )
}

export default Users