import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'

const Left = () => {
  return (
    <div className='bg-blue-900 w-[30%] text-white'>
        <Search/>
        <Users/>
        <Logout/>
    </div>
  )
}

export default Left