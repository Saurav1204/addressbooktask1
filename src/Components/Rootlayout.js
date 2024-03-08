import React from 'react'
import { NavLink,Outlet } from 'react-router-dom';

export default function Rootlayout() {
  return (
    <div className='root-layout'>
       <header>
      <nav>
         <NavLink to="/">Form</NavLink>
         <NavLink to="Addressbooklist">List</NavLink>
       
      </nav>
    </header>
    
    <main>
        <Outlet />
    </main>
    </div>
  )
}
