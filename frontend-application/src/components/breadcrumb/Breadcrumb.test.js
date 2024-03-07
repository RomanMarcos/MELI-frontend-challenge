import React from 'react';
import { render } from '@testing-library/react';
import { Breadcrumb } from './Breadcrumb';
import '@testing-library/jest-dom/extend-expect';

describe('<Breadcrumb />', () => {
  test('renders correctly with multiple categories', () => {
    const categories = ['Category 1', 'Category 2', 'Category 3'];
    const { getByText } = render(<Breadcrumb categories={categories} />);
    
    expect(getByText('Category 1 > Category 2 > Category 3')).toBeInTheDocument();
  });

  test('renders correctly with single category', () => {
    const categories = ['Category'];
    const { getByText } = render(<Breadcrumb categories={categories} />);
    
    expect(getByText('Category')).toBeInTheDocument();
  });
});
