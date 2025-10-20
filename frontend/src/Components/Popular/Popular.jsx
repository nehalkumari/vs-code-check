import React from 'react'
import './popular.css'
import data_product from '../../public/Assests/data.js'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-tems">
        {data_product.map((items, i) => {
          return <items key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular
