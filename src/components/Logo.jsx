import React from 'react'

function Logo({className}) {
  return (
    <div className='w-full'>
      <img 
      src="https://img.freepik.com/premium-vector/word-concept-color-geometric-shapes-blog_205544-12899.jpg?w=826" 
      alt="Logo"
      className={`${className}`}
      />
    </div>
  )
}

export default Logo