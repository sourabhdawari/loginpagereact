import React from 'react'
import Form from '../Components/Form'
import Navbar from '../Components/Navbar'

export default function Login() {
  return (
    <div className='login pb-5'>
      <div className="container">
        <Navbar/>
        <Form/>
      </div>
    </div>
  )
}
