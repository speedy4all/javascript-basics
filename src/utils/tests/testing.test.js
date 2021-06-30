import { sum, stringUppercase } from '../testing'

test('suma corecta 7', () => {
    expect(sum(5, 2)).toBe(7)
})

test('Uppercase Hello world!', () => {
    const str = 'Hello world!';
    expect(stringUppercase(str)).toBe(str.toUpperCase())
})


describe('testing file', () => {
    describe('testing file 2', () => {
        it('suma correct 117', () => {
            expect(sum(15, 102)).toBe(117)
        })
    })
})
