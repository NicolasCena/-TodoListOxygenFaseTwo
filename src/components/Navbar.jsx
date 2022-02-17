import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='d-flex justify-content-center'>
      <p><Link to="/todo" className='text-light fs-4 fw-bold badge '>SectionTodos</Link></p>
      <p><Link to="/" className='text-light fs-4 fw-bold badge'>FormTodos</Link></p>
    </div>
  )
}
