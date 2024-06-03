import React from 'react'

export default function Button({text, width, textColor}) {
  return (
    <button className={`bg-primary1 ${textColor} px-7 font-bold rounded-3xl py-3 hover:opacity-70 hover:text-white ${width}`}>{text}</button>
  )
}
