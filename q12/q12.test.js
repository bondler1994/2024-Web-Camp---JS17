import { findMultiple } from "./q12main.js";
import { main } from "./q12main.js";

describe("測試 findMultiple 函式",() => {

    test('正常情況：在限制為10裡面找出3得倍數',() => {
        const result = findMultiple(3,10);
        expect(result).toEqual([3, 6, 9])        
    })

    test('邊界：在限制為0時，是否會得到0',()=>{
        const result = findMultiple(5,0);
        expect(result).toEqual([])        

    })

})

describe("測試", ()=> {
    
})
