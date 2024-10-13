import { main } from './q17main.js';

test('測試main', () => {
    const result = main();
    expect(result).toEqual({
        a: 253,
        b: 251,
        c: 305,
        d: 191
    });
});
