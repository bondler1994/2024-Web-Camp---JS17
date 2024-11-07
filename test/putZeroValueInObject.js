const candidates2 = [
    ['a', 'c', 'b', 'd', 'e'],
    ['c', 'b', 'd', 'e', 'a'],
    ['b', 'c', 'e', 'd', 'a'],
    ['d', 'e', 'c', 'b', 'a'],
    ['a', 'b', 'd', 'e', 'c']
]


const giveCandidatesZeroValue = {}

function test(num) {
    // console.log(num)
    // for(let i = 0; i=)
    num.forEach((row, rowIndex) => {
        giveCandidatesZeroValue[row] = 0
        console.log(giveCandidatesZeroValue)
        // console.log('row', row)
        // console.log('rowIndex', rowIndex)
    })
}

test(candidates2[0])


//by jeremy
const array = ["a", "b", "c", "a", "b"];
const obj = {};

//跑迴圈,element 代表陣列內容
array.forEach((element, index) => {
    //如果obj物件裡是否有字串,如果沒有就加上1
    //當obj裡面有1就代表已經置入了字串
    if (obj[element]) {
        //如果偵測到裡面有相同字串，那就++(在這裡是+1)
        obj[element]++
    } else {
        obj[element] = 1;
    }
});
console.log(obj)




