import { isZero } from './q2module';

describe('isZero', () => {
    test('throws an error if the input is 0', () => {
        expect(() => isZero(0)).toThrow("請輸入值不為零");
        expect(() => isZero('0')).toThrow("請輸入值不為零");
    });

    test('does not throw an error if the input is not 0', () => {
        expect(() => isZero(1)).not.toThrow();
        expect(() => isZero(-1)).not.toThrow();
        expect(() => isZero('1')).not.toThrow();
        expect(() => isZero('some string')).not.toThrow();
    });
});
