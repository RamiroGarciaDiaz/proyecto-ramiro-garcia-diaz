import React from 'react'
import placeholderImage from "../../Assets/placeholder.png"
import useItemCount from '../../Hooks/useItemCount'

const Card = ({stock, name, price}) => {
  
  const { count, amount } = useItemCount(stock)

  return (
    <section className='product-card'>
        <h3 className='product-name'>
          {name}
        </h3>
        <img src={placeholderImage} alt="Imagen del producto" />
        <h4 className='price-tag'>Precio: <span className='price'>${price}</span></h4>
        <div className='quantity'>
          <button onClick={()=>count(-1)}>-</button>
          <p>{amount} / {stock}</p>
          <button onClick={()=>count(+1)}>+</button>
        </div>
    </section>
  )
}

export default Card;