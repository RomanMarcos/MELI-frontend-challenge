import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ProductsDisplay } from './ProductsDisplay';

describe('<ProductsDisplay />', () => {
    test('renders correctly with products', () => {
        const results = [
          {
            id: '1',
            title: 'Product 1',
            picture: 'path/to/image1',
            price: {
              amount: 100,
              currency: 'USD'
            },
            free_shipping: true,
            seller_address: 'Seller Address 1'
          },
          {
            id: '2',
            title: 'Product 2',
            picture: 'path/to/image2',
            price: {
              amount: 200,
              currency: 'USD'
            },
            free_shipping: false,
            seller_address: 'Seller Address 2'
          }
        ];
    
        render(
          <BrowserRouter>
            <ProductsDisplay results={results} categories={[]} />
          </BrowserRouter>
        );
    });

    test('renders ProductNotFound component when there are no products', () => {
        const { getByTestId } = render(
            <ProductsDisplay results={[]} categories={[]} />
        );

        expect(getByTestId('product-not-found')).toBeInTheDocument();
    });
});
