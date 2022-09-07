import React from 'react'
import Footer from '../components/Footer'
import FooterBanner from '../components/FooterBanner'
import HeroBanner from '../components/HeroBanner'
import { client } from '../lib/client'
const Home = ({products, banner}) => {
  console.log(products)
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
      <FooterBanner />
      <Footer />
    </>
  )
}

export default Home
export const getServerSideProps = async () => {
  const productsQuery = '*[_type == "product"]'
  const products = await client.fetch(productsQuery)
  const bannerQuery = '*[_type == "banner"]'
  const banner = await client.fetch(bannerQuery)

  return {
    props:{products,banner}
  }
}
