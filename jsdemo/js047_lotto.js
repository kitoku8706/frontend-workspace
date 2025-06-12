//1. 6개의 난수를 구하고 중복체크
let lotto = [];
for (let i = 0; i <= 5; i++) {
    //0.0이상~1.0미만
    //0.0이상~45.0미만
    let ran = Math.random() * 45;


    ran = Math.floor(ran) + 1;
    lotto.push(ran);
    console.log(lotto);
    for (let j = 0; j < i; j++) {
        if (lotto[j] == lotto[i]) {
            lotto.pop();
            i--;
            break;
        }
    }
}



//2. 정렬
lotto.sort((a, b) => {
    return a - b;
});
console.log(lotto);


//3. 출력
//console.log(lotto);
let divList = document.querySelectorAll('div.wrap>div')
console.log(divList);
divList.forEach((Element, idx) => {
    Element.innerText = lotto[idx];
});



