import React from 'react'
import Footer from '../components/Footer'
import FooterBanner from '../components/FooterBanner'
import HeroBanner from '../components/HeroBanner'
import Product from '../components/Product'
import { client } from '../lib/client'
const Home = ({products, banner}) => {
  return (
    <>
      <HeroBanner  heroBanner={banner.length && banner[0]}/>
      <div className="products-heading">
        <h2>Best Selling Product</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product}/> )}
      </div>
      <FooterBanner footerBanner={banner && banner[0]}/>
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
