function A(FnB, FnC) {
    setTimeout(function(){
        console.log('this is a function');
        FnB(FnC);
    },0);
}

function B(Fn) {
    console.log('this is B function');
    Fn();
}

function C() {
    console.log('Run Finish');
}

A(B,C)

// function A() {
//     setTimeout(function(){
//         console.log('this is a function');
//     },0);
// }

// function B() {
//     console.log('this is B function');
// }

// function C() {
//     console.log('Run Finish');
// }

// A()
// B()
// C()
