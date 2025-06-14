//Spread Operator = 스프레드 연산자 = 전개연산자 = 펼침연산자
// 형태 : (...변수)

//////////////////////
// [1] 배열에서의 Spred Operator

//1.배열 복사 (Array copy)
let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(`arr1:${arr1}`);
console.log(`arr2:${arr2}`);

arr2.push(4);
console.log(`arr1:${arr1}`);
console.log(`arr2:${arr2}`);

let arr3 = [1, 2, 3];
let arr4 = [];

arr4.push(4);
console.log(`arr3:${arr3}`);
console.log(`arr4:${arr4}`);

let arr5 = [10, 20, ...arr3, 40, 50];
console.log(arr5);

let arr6 = [5, 6, [7, 8]];
let arr7 = [1, ...arr6];
console.log(arr6);
console.log(arr7);

arr6[0] = 20;
arr[2][0] = 10;
console.log(arr6);
console.log(arr7);

// 2. 배열 병합(Array Concatenation)
let arr8 = [1, 2, 3];
let arr9 = [4, 5, 6];
let arr10 = [7, 8, 9];
let arr11 = [...arr8, ...arr9, ...arr10];
console.log(arr11); //[  1, 2, 3, 4, 5,  6, 7, 8, 9]

//////////////////////////////////////////////////////
//[2] 함수에서의  Spread Operator
//1. Rest Parameter(나머지 매개변수)
function display(...params) {
    return params.reduce((sum, a) => {
        return sum + a;
    });
}

console.log(display(1, 2)); //3
console.log(display(1, 2, 3, 4, 5)); //15

//2. 함수 호출 인수
console.log(Math.max(1, 2, 3, 4, 5)); //5
console.log(Math.min(1, 2, 3, 4, 5)); //1

let arr13 = [10, 20, 30, 40, 50];
console.log(Math.max(...arr13)); //50

//////////////////////////
// [3]rocpdptj Spread Operator

//1. 객체복사
let prevState = { name: "고수", age: 30 };
let currentState = { ...prevState };
console.log(currentState);

currentState = { ...prevState, loc: "서울" };
console.log(currentState);

//2.객체 업데이트
let prevState2 = { name:}