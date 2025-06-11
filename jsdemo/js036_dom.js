let myNode = document.querySelector('#p2');

//parentNode 부모
let ptNode = myNode.parentNode;
console.log(ptNode);
console.log(`${ptNode}`);
////////////////////////////
// previousSibling
let prevNode = myNode.previousSibling;
console.log(`prevNove=${prevNode}`); // prevNove=[object Text]

prevNode = prevNode.previousSibling;
console.log(prevNode);    // 
console.log(`prevNove=${prevNode}`)   //  prevNove=[object HTMLParagraphElement]

////////////////////////////////////
// nextSibling
let nextNode = myNode.nextSibling;
console.log(`nextNode=${nextNode}`);

nextNode = nextNode.nextSibling;
console.log(nextNode);  // 
console.log(`nextNode=${nextNode}`);  // nextNode=[object HTMLParagraphElement]

////////////////////////////
//previousElementSibling
let prevEleNode = myNode.previousElementSibling;
//prevEleNode:[object HTMLParagraphElement], content1
console.log(`prevEleNode:${prevEleNode}, ${prevEleNode.innerText}`);

/////////////////////////
// nextElementSibling
let nextEleNode = myNode.nextElementSibling;
// nextEleNode=[object HTMLParagraphElement], content3
console.log(`nextEleNode=${nextEleNode}, ${nextEleNode.innerText}`)

/////////////////
// childNodes
let divNode = document.querySelector('#wrap');
// divNode:[object HTMLDivElement]
console.log(`divNode:${divNode}`);

let divChildesNode = divNode.childNodes;
// divChildesNode=[object NodeList]
console.log(`divChildesNode=${divChildesNode}`);
//  NodeList(9) [text, p#p1, text, p#p2, text, p#p3, text, p#p4, text]
console.log(divChildesNode);

//////////////////////////////////
// children
let divchildren = divNode.children;
//  divChildren=[object HTMLCollection]
console.log(`divChildren=${divchildren}`);
//  HTMLCollection(4) [p#p1, p#p2, p#p3, p#p4, p1: p#p1, p2: p#p2, p3: p#p3, p4: p#p4]
console.log(divchildren);
console.log(divchildren[0]);
console.log(divchildren.item(0));
console.log(divchildren.namedItem('p1'));

/////////////////////////////
// 
let pNode = document.querySelector('#p4');
let aNode = pNode.firstChild;
console.log(aNode);

let imgNode = pNode.firstElementChild;
// 
console.log(imgNode);

/////////////////////////
// 객체.getAttribute("속성명"), 객체.setAttribute("속성명","속성값");
//객체.속성명,                    객체.속성명="속성값"

let imgAttrNode = imgNode.getAttribute("src");
// images/gosu.jpg
console.log(imgAttrNode);

imgAttrNode = imgNode.src;
//
console.log(imgAttrNode);

imgNode.setAttribute('title', '스타배우');
imgNode.width = 300;
imgNode.heigt = 300;


