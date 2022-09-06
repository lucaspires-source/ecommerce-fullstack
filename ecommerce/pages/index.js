import React from 'react'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Product</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {['Product1', 'Procuct2'].map((product) => product)}
      </div>
      <Footer />
    </>
  )
}

export default Home
