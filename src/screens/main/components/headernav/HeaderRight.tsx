import { ModeToggle } from '@/components/mode-toggle'
import React from 'react'
import HeaderAvatar from './HeaderAvatar'

const HeaderRight = () => {
  return (
    <div className='flex items-center gap-x-4'>
      <div>
        <HeaderAvatar/>
      </div>
      <div>
         <ModeToggle/>
      </div>
    </div>
  )
}

export default HeaderRight