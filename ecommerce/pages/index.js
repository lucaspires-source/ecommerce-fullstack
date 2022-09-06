import React from 'react'

const Home = () => {
  return (
    <>
    <div>
      <h2>Best Selling Product</h2>
      <p>Speakers of many variations</p>
    </div>
    <div>
      {
        ['Product1', 'Procuct2'].map(
          (product) => product
        )
      }
    </div>
    </>
  )
}

export default Home