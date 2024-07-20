import { Outlet } from 'react-router-dom'
import { Navbar } from './component'
import { useState } from 'react';
const Root = () => {

  return (
    <div className='App' >
      <div className='navigat'  >
        <Navbar />
      </div>
    <Outlet/>
    </div>
  )
}

export default Root