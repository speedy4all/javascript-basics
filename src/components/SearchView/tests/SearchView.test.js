import { render, screen, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer'
import SearchView from '../index';

const defaultProps = {
    setSearch: jest.fn(),
    search: 'new'
}

test('render correct searchView', () => {
    const { getByTestId } = render(<SearchView search={defaultProps.search} setSearch={defaultProps.setSearch}/>)
    const searchComponent = getByTestId('searchView-element')
    expect(searchComponent).toBeInTheDocument();
})

describe('Search input should', () => {
    it('not have any value initially', () => {
        render(<SearchView setSearch={defaultProps.setSearch}/>)
        const inputSearch = screen.getByTestId('searchView-input');
        expect(inputSearch.value).toBe('')
    })

    it('not have correct value from props', () => {
        render(<SearchView search="correct-search" setSearch={defaultProps.setSearch}/>)
        const inputSearch = screen.getByTestId('searchView-input');
        expect(inputSearch.value).toBe('correct-search')
    })

    it('not have correct value from props', () => {
        render(<SearchView search="correct-search" setSearch={defaultProps.setSearch}/>)
        const inputSearch = screen.getByTestId('searchView-input');
        expect(inputSearch.value).toBe('correct-search')
    })

    it('have correct input value after change', () => {
        render(<SearchView search="correct-search" setSearch={defaultProps.setSearch}/>)
        const inputSearch = screen.getByTestId('searchView-input');
        fireEvent.change(inputSearch, { target: { value: 'searchView'}})
        expect(defaultProps.setSearch).toHaveBeenCalledWith('searchView')
    })

    it('should render the correct snapshot', () => {
        const tree = renderer
            .create(<SearchView search={defaultProps.search} setSearch={defaultProps.setSearch}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })

})
