import React from 'react'

const Button = ({filled = false,data, clsStyle = 'py-2'}) => {
  return (
    
    <button className={`${filled ? 'bg-yellow-900 text-black-33' :'text-white'} leading-5 ${clsStyle} px-8 border border-1 border-yellow-900 rounded-full`}>
      {data}
    </button>

  )
}

export default Button
