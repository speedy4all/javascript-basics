import { render, fireEvent } from '@testing-library/react'
import SearchButton from '../search-button';
import renderer from 'react-test-renderer';

const defaultProps = {
    onClick: jest.fn(),
    posts: [],
}

describe('SearchButton component', () => {
    it('should call onClick', () => {
        const { debug, getByTestId } = render(<SearchButton onClick={defaultProps.onClick} /> )
        debug();
        const button = getByTestId('clear-button')
        fireEvent.click(button);
        expect(defaultProps.onClick).toHaveBeenCalledTimes(1)
        fireEvent.click(button);
        fireEvent.click(button);
        fireEvent.click(button);
        fireEvent.click(button);
        expect(defaultProps.onClick).toHaveBeenCalledTimes(5)
        expect(button).toContainHTML('button')
    })

    it('should render the correct snapshot', () => {
        const tree = renderer
            .create(<SearchButton onClick={defaultProps.onClick} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})
