import React from 'react'
import {Link, Outlet} from 'react-router-dom'


const Products = () => {
  return (
    <div>
         <h1 className='text-center'>Products Page</h1>
 
      <input className='bg-slate-100 border-solid border-2 border-red-500' type='search' placeholder='search products' />

<br />
<br />
      
      <Link className='mr-4' to='featured'>Featured</Link>
      <span>  </span>
      <Link to='new'>New Products</Link>
<Outlet />


   

      <br />
      <br />
 
    </div>
  )
}

export default Products