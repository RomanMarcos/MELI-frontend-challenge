import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SearchBox } from './SearchBox';

describe('<SearchBox />', () => {
    test('renders component correctly', () => {
      const { getByTestId } = render(<SearchBox keyword="" setKeyword={() => {}} search={() => {}} placeholder="Search" />);
      const inputElement = getByTestId('searchBox-input');
      expect(inputElement).toBeInTheDocument();
    });
  
    test('calls search function when Enter key is pressed', () => {
      const searchMock = jest.fn();
      const { getByTestId } = render(<SearchBox keyword="" setKeyword={() => {}} search={searchMock} placeholder="Search" />);
      const inputElement = getByTestId('searchBox-input');
      fireEvent.keyDown(inputElement, { key: 'Enter', keyCode: 13 });
      expect(searchMock).toHaveBeenCalled();
    });
  
    test('calls search function when button is clicked', () => {
      const searchMock = jest.fn();
      const { getByLabelText } = render(<SearchBox keyword="" setKeyword={() => {}} search={searchMock} placeholder="Search" />);
      const buttonElement = getByLabelText('buscar');
      fireEvent.click(buttonElement);
      expect(searchMock).toHaveBeenCalled();
    });
  
    test('calls search function when button is clicked, coming from another component', () => {
      const searchMock = jest.fn();
      const { getByLabelText } = render(<SearchBox keyword="" setKeyword={() => {}} search={searchMock} placeholder="Search" />);
      const buttonElement = getByLabelText('buscar');
      fireEvent.click(buttonElement);
      expect(searchMock).toHaveBeenCalled();
    });
});