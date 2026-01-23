import React from 'react'

export default function Value({ title, text, className}) {
  return (
    <div className={`max-w-[220px] ${className}`}>
        <h3 className='text-xl font-semibold mb-2'>
            {title}
        </h3>
        <p className="text-md text-white/80 leading-relaxed">
            {text}
        </p>
    </div>
  )
}
