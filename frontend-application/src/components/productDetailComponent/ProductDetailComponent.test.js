import React from 'react';
import { render } from '@testing-library/react';
import { ProductDetailComponent } from './ProductDetailComponent';
import '@testing-library/jest-dom/extend-expect';

describe('<ProductDetailComponent />', () => {
  const product = {
    id: '1',
    title: 'Product 1',
    picture: 'path/to/image1',
    price: {
      amount: 100,
      currency: 'USD',
      decimals: 0
    },
    condition: 'Nuevo',
    description: 'Product description'
  };

  test('renders product details correctly', () => {
    const { getByText, getByAltText } = render(
      <ProductDetailComponent product={product} categories={[]} />
    );

    // Check if product image is rendered
    expect(getByAltText('Product 1')).toBeInTheDocument();

    // Check if product title is rendered
    expect(getByText('Product 1')).toBeInTheDocument();

    // Check if product condition is rendered using a custom matcher function
    expect(getByText((content, element) => {
      return element.className === 'product-condition' && content.includes('Nuevo') && content.includes(' vendidos');
    })).toBeInTheDocument();

    // Check if buy button is rendered
    expect(getByText('Comprar')).toBeInTheDocument();

    // Check if product description is rendered
    expect(getByText('Descripcion del producto')).toBeInTheDocument();
    expect(getByText('Product description')).toBeInTheDocument();
  });

  test('does not render product description if empty', () => {
    const productWithoutDescription = {
      ...product,
      description: ''
    };

    const { queryByText } = render(
      <ProductDetailComponent product={productWithoutDescription} categories={[]} />
    );

    expect(queryByText('Descripcion del producto')).toBeNull();
    expect(queryByText('Product description')).toBeNull();
  });
});
