import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './NavBar';
import '@testing-library/jest-dom/extend-expect';

describe('<NavBar />', () => {
  test('renders correctly', () => {
    const keyword = 'test';
    const setKeyword = jest.fn();
    const search = jest.fn();

    const { getByAltText, getByPlaceholderText } = render(
      <BrowserRouter>
        <NavBar keyword={keyword} setKeyword={setKeyword} search={search} />
      </BrowserRouter>
    );

    // Check if logo is rendered
    expect(getByAltText('Logo mercado libre')).toBeInTheDocument();

    // Check if search box is rendered with correct keyword and placeholder
    expect(getByPlaceholderText('Nunca dejes de buscar')).toBeInTheDocument();
    expect(getByPlaceholderText('Nunca dejes de buscar').value).toBe(keyword);
  });
});
