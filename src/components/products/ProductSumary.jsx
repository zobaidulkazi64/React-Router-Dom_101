import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductSumary = () => {
    const navigate = useNavigate()

  return (
    <div>
        <h1>Products Summary page</h1>
        <button onClick={() => navigate()}>Go Home</button>
    </div>
  )
}

export default ProductSumary