import React from 'react'
import PropTypes from 'prop-types';
import "./productsDisplay.scss";
import { Breadcrumb } from '../breadcrumb/Breadcrumb';
import { Link } from 'react-router-dom';
import { formatter } from '../../helper/priceFormatter';
import freeShipping from '../../assets/ic_shipping.png';
import { ProductNotFound } from '../productNotFound/ProductNotFound';

//This component is the responsibe of show the list of products after the API response
export const ProductsDisplay = ({ results, categories }) => {
  return (
        <section>
          <Breadcrumb categories={categories} />
          <div className="products-list">
          {results && results.length > 0 ? results.map((product) => {
            return (
                <Link to={`/items/${product.id}`} className='product-item' key={product.id}>
                    <div className="image-container">
                        <img className="product-image" alt={product.title} src={product.picture} />
                    </div>
                    <div className="item-details">
                        <div className="top-section">
                        <div className="item-price-block">
                        <div className="item-price">
                            <span className="price">
                            {
                              "$ " + formatter(product.price.amount, product.price.currency)
                            }
                            </span>
                        </div>
                        {product.free_shipping && (
                          <img
                            className="free-shipping-icon"
                            alt="Envío gratis"
                            src={freeShipping}
                          />
                        )}
                        </div>
                        <div className="address">{product.seller_address}</div> {/* Need to fix the way I get the address info from the MELI API */}
                    </div>
                    <div className="item-title">{product.title}</div>
                    </div>
                </Link>
            );
          }) : <ProductNotFound /> }
      </div> 
      </section>
    )
}

ProductsDisplay.propTypes = {
  results: PropTypes.array,
  categories: PropTypes.array
}