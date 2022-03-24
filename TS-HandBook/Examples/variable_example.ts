// value variables
let a;
let b = a;
a = 1;
console.log('b is:', b); // b = undefined

// refs variables
let arr = [1, 2, 3, 4];
let brr = arr;
arr[1] = 1;
console.log('brr: ', brr); // brr = [1, 2, 3, 4]