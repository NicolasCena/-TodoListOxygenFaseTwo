import React from 'react'

export const Loading = () => {
  
  return (
    <div className='vh-100 w-100 d-flex justify-content-center align-items-center'>
        <div class="spinner-grow text-info" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}
