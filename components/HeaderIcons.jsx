import React from 'react'

export const HeaderIcons = ({ title, Icon }) => {
  return (
    <div className='cursor-pointer flex flex-col items-center group w-12 sm:w-20 hover:text-white'>
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className='tracking-widest opacity-0 group-hover:opacity-100'>{title}</p>
    </div>
  )
}
