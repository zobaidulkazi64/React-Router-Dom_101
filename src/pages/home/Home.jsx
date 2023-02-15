import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1>This Home Page</h1>

      <button className='bg-amber-300 rounded-full p-2  font-bold' type='' onClick={() => navigate('products_summary', {replace:true })}>Product Hant</button>

    </>
  )
}

export default Home