//new Set 針對陣列 已知類似.map()
const test = new Set([1,2,3,4,5]);
console.log(test);

//這是放入值
test.add(22)
console.log(test);

//這是檢查 Set 裡面是否有指定得值
//has 傳入參數檢查 object ：回傳布林
// test.has(6)
console.log(test.has(6));