import React from 'react'
import { NavLink } from 'react-router-dom'


const Navber = () => {
    const NavLinkStyles = ({isActive}) => {
        return{
            backgroundColor: isActive ? 'red' : '#fafafa',
            fontSize: isActive ? '20px' : '20px'
        }

    }
  return (
    <>
        <div className='p-4'>
        <NavLink className='p-1 m-2'  style={NavLinkStyles }  to='/'>Home</NavLink>
        <NavLink  className='p-1 m-2' style={NavLinkStyles }  to='about'>About</NavLink>
        <NavLink className='p-1 m-2' style={NavLinkStyles} to='products'>Products</NavLink>
        
        </div>
    </>
  )
}

export default Navber