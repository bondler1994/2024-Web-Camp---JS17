import { isPrime } from "./q10module"

describe("測試質數",() => {

    test('測試11是否為質數',() => {
        expect(isPrime(11)).toBe(true)
    })
    
    test('測試4是否不是質数', () => {
        expect(isPrime(4)).toBe(false);
    });
})
