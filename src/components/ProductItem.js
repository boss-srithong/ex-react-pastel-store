import React, { useRef } from 'react'
import shoeImg from '../assets/shoe.png'

const ProductItem = ({item, onAddItem}) => {
  const card = useRef(null)

  const handleMouseOver = () => {
    card.current.classList.add('animate');
  }

  const handleMouseLeave = () => {
    card.current.classList.remove('animate');
  }

  const handleAddToCartButton = () => {
    onAddItem(item);
  }
  
    return (
        <div className="product-container">
          <div className={`product-card ${ item.stock === 0 ? 'product-out-of-stock' : ''}`} ref={card} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <img src={ shoeImg } alt=""/>
            <div className="add-to-cart-button" onClick={handleAddToCartButton}>Add to Cart</div>
            <div className="stats">
              <div className="stats-container">
                <span className="product_price">${ item.price }</span>
                <span className="product_name">{ item.name }</span>
                <p>{ item.description }</p>

                <div className="product-options">
                  <strong>SIZES</strong>
                  <span>{ item.sizes.join(', ') }</span>
                  <strong>COLORS</strong>
                  <div className="colors">
                    {console.log(item.colors)}
                    { 
                      item.colors.map(color => (
                        <div key={color} className={`c-${ color }`}><span/></div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ProductItem;