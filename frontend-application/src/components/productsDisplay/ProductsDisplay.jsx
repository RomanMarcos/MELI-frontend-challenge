import React from 'react'
import "./productsDisplay.scss";
import { Breadcrumb } from '../breadcrumb/Breadcrumb';
import { Link } from 'react-router-dom';
import { formatter } from '../../helper/priceFormatter';
import freeShipping from '../../assets/ic_shipping.png';

//This component is the responsibe of show the list of products after the API response
export const ProductsDisplay = ({ results, categories }) => {
  return (
        <section>
          <Breadcrumb categories={categories} />

          <div className="products-list">
          {results.length > 0 ? results.map((item) => {
            return (
                <Link to={`/items/${item.id}`} className='product-item' key={item.id}>
                    <div className="image-container">
                        <img className="product-image" alt={item.title} src={item.picture} />
                    </div>
                    <div className="item-details">
                        <div className="top-section">
                        <div className="item-price-block">
                        <div className="item-price">
                            <span className="price">
                            {
                              "$ " + formatter(item.price.amount, item.price.currency)
                            }
                            </span>
                        </div>
                        {item.free_shipping && (
                          <img
                            className="free-shipping-icon"
                            alt="Envío gratis"
                            src={freeShipping}
                          />
                        )}
                        </div>
                        <div className="address">{'Capital Federal'}</div> {/* Need to fix the way I get the address info from the MELI API */}
                    </div>
                    <div className="item-title">{item.title}</div>
                    </div>
                </Link>
            );
          }) : <p>NO RESULTS</p> }
      </div> 
      </section>
    )
}