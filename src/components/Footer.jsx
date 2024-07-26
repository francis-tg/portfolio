import React from 'react'

function Footer() {
  return (
      <div className='flex justify-center items-center'>
          <p>Copyrigth &copy; {new Date().getUTCFullYear()} CiscoDev</p>
    </div>
  )
}

export default Footer