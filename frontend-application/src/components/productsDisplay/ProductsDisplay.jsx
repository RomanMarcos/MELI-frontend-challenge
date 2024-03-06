import React from 'react'
import "./productsDisplay.scss";

//This component is the responsibe of show the list of products after the API response
export const ProductsDisplay = ({ results, isLoad }) => {
  return (
        <section>
          <div className="products-list">
          {results.length > 0 ? results.map((item) => {
            return (
                <div className='product-item'>
                    <div className="image-container">
                        <img className="product-image" alt={item.title} src={item.picture} />
                    </div>
                    <div className="item-details">
                        <div className="top-section">
                        <div className="item-price-block">
                        <div className="item-price">
                            <span className="price">
                            {item.price.amount}
                            </span>
                        </div>
                        </div>
                        <div className="address">{item.address}</div>
                    </div>
                    <div className="item-title">{item.title}</div>
                    </div>
                </div>
          );
        }) : <p>NO RESULTS</p> }
      </div> 
      </section>
    )
}
