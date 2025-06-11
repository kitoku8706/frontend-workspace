// <button value="login">login</button>

let idNode = document.querySelector('#my_id');
let passNode = document.querySelector('#my_pass');

// btn.onclick = function () {
document.log_f.onsubmit = function () {
    if (idNode.value == "") {
        alert('아이디를 입력하세요.');
        return false;
    }

    if (passNode.value == "") {
        alert('비밀번호를 입력하세요.');
        return false;
    }

    return true;
}