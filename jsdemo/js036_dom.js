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


