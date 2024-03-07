import React from 'react'
import PropTypes from 'prop-types';
import './productDetailComponent.scss';
import { formatter } from '../../helper/priceFormatter';
import { Breadcrumb } from '../breadcrumb/Breadcrumb'
import { random_soldQuantity } from '../../helper/randomNumber';

export const ProductDetailComponent = ({ product, categories }) => {
  return (
    <section>
      <Breadcrumb categories={categories} />
      <div className="product-detail-page">
          <div>
            <div className="product-detail-top">
              <img className="image-container" alt={product.title} src={product.picture}></img>
              <div className="product-detail-actions">
                <div className="product-condition">
                  {product.condition} - {random_soldQuantity(5, 100)} vendidos
                </div>
                <h1 className="product-title">{product.title}</h1>
                <span className="item-price">
                  {
                    "$ " + formatter(product.price.amount, product.price.currency)
                  }
                  <span className="item-price-decimals">
                    {`${product.price.decimals !== 0 ? product.price.decimals : '00'} `}
                  </span>
                </span>
                
                <button className="buy-button" aria-label="Comprar">Comprar</button>
              </div>
            </div>
            <div className="product-detail-bottom">
              {product.description !== "" && (
                <>
                  <p>Descripcion del producto</p>
                  <div className="product-description">
                    <p>{product.description}</p>
                  </div>
                </>
              )}
            </div>
          </div>
      </div>
    </section>
  )
}

ProductDetailComponent.propTypes = {
  results: PropTypes.object,
  categories: PropTypes.array
}