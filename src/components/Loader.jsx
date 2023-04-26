import React from 'react'

const Loader = () => {
  return (
    <div className='bg-black h-screen flex items-center ' >
       <p className="mx-auto text-5xl text-center text-yellow-500 loading">
          Loading...
        </p>
    </div>
  )
}

export default Loader