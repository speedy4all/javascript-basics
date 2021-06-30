import { render, screen, fireEvent } from '@testing-library/react'
import Posts from '../index';
import { PostProvider } from '../../../contexts/PostsContext'
import renderer from 'react-test-renderer';

describe('Posts component', () => {
    it('should match Snapshot', () => {
        const listPosts = renderer.create(<PostProvider><Posts /></PostProvider>).toJSON()
        expect(listPosts).toMatchSnapshot();
    })

    it('should clear searched value', () => {
        const { debug } = render(<PostProvider><Posts /></PostProvider>)
        debug();
        const inputSearch = screen.getByTestId('searchView-input');
        fireEvent.change(inputSearch, { target: { value: 'posts'}})
        expect(inputSearch.value).toBe('posts')
        const button = screen.getByTestId('clear-button')
        fireEvent.click(button);
        expect(inputSearch.value).toBe('')
    });
})
