import { addBothFrame } from "./q9module";

describe("測試陣列相加", () => {
    test("測試兩個陣列相加數值是否正確",() => {
        const arr1 = [5,5,5,5,5]
        const arr2 = [5,5,5,5,5]
        const expected = [10,10,10,10,10]
        expect(addBothFrame(arr1,arr2)).toEqual(expected)
    })
    test("測試正負數相加", () => {
        const arr1 = [-1, -2, -3];
        const arr2 = [4, 5, 6];
        const expected = [3, 3, 3];
        expect(addBothFrame(arr1, arr2)).toEqual(expected);
    });
})