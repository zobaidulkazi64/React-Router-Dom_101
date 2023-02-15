import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Notfound from './pages/404/NotFound'
import Navber from './components/navber/Navber'
import ProductSumary from './components/products/ProductSumary'
import Products from './components/products/Products'
import FeaturedProducts from './components/newProducts/FeaturedProducts'
import NewProducts from './components/newProducts/NewProducts'


const App = () => {
  return (
    <>
    <Navber />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='*' element={<Notfound />} />
      <Route path='products_summary' element={<ProductSumary />} />

      <Route path='products' element={<Products />} > 
        <Route path='featured' element={<FeaturedProducts />} />
        <Route path='new' element={<NewProducts />} />
      </Route>

    </Routes>

    </>
  )
}

export default App