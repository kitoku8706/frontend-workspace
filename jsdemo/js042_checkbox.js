//약관동의
document.frm.onsubmit = () => {
    let admin = document.frm.admin;
    if (!admin.checked) {
        alert('약관에 동의해야 합니다.');
        return false;
    }
}

//전체선택
document.frm.allCheck.onclick = function () {

    // document.frm.subject1.checked = this.checked
    // document.frm.subject2.checked = this.checked
    // document.frm.subject3.checked = this.checked


    // let checkgroup = document.querySelectorAll(".checkgroup");
    // // console.log(checkgroup);

    // let myThis = this;
    // checkgroup.forEach(function (Element) {
    //     //this는 window
    //     Element.checked = myThis.checked;
    // });

    ///////// map()
    let myThis = this;
    let checkgroup = document.querySelectorAll(".checkgroup");
    //checkgroup은 NodeList이므로 map을 사용할수없다.
    //Array.from()을 이용해서 NodeList을 Array로 생성한다.

    // let myArray = Array.from(checkgroup);
    // myArray.map((Element) => {
    //     return Element.checked = myThis.checked;
    // });
    // ==============================

    let iArray = [...checkgroup];
    iArray.map((Element) => {
        return Element.checked = myThis.checked;
    });



}



