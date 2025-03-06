import React from 'react'

export const Button = ({children,...props}) => {
  return (
    <button className="px-2 py-1 sm:px-4 sm:py-2 text-xs md:text-base rounded-sm sm:rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 w-full sm:w-auto" {...props}>
      {children}
    </button>
  )
}
