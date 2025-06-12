//DOMContentLoaded: dom이 로딩이 되면 등록된 함수를 수행
//load : css, img, js등의 리소스등이 로딩이 된후 등록된 함수를 수행

document.addEventListener('DOMContentLoaded', function () {
    /// 돔이 메모리에 로딩이 되면 이함수를 수행하라
    banner.rollInit(2000); // 배너 롤링
});


let banner = {
    rollId: null,
    setInterval: 2000,

    //롤링 배너 초기화
    rollInit: function (newinterval) {
        if (parseInt(newinterval) > 0) {
            this.Interval = newinterval;
        }
    }
    //현재배너
    let firstitem = document.querySelector(".rollimgs li");
    if(firstitem) {
        firstitem.classList.add('currentroll');
    }

    //다음배너
    let seconditem=document.querySelectorAll(".rollimgs li")[1];
    if(seconditem) {
        seconditem.classList.add("nextroll");
    }

    //이전 배너
    document.querySelector(".rollimgs li:last-child").classList.add("prevroll");
    this.rollId = setInterval(this.rollPrev, this.interval); // 롤링 인터벌 호출 2초(2000)마다 호출
},

    //이전 배너 롤링
    rollPrev: function (){
        document.querySelector(".rollimgs").classList.add('reverse');
if (document.querySelector('.nextroll')) {
    document.querySelector(".nextroll").classList.remove("nextroll");
}
if (document.querySelector('.currentroll')) {
    document.querySelector(".currentroll").classList.add("nextroll");
    document.querySelector(".currentroll").classList.remove("currentroll");
}
if (document.querySelector(".prevroll")) {
    document.querySelector(".currentroll").classList.add("currentroll");
    document.querySelector(".currentroll").classList.remove("prevroll");
}
if (document.querySelector(".currentroll")).previousElementSibling{
    document.querySelector(".currentroll").previousElementSibling.classList.add("prevroll");
}else {
    document.querySelector("rollimgs li:last-child").classList.add("prevroll");
}
    },

//다음 배너 롤링
rollNext: function() {
    document.querySelector(".rollimgs").classList.remove("reverse");
    if (document.querySelector(".prevroll")) {
        document.querySelector(".prevroll").classList.remove("prevroll");
    }
    if (document.querySelector(".currentroll")) {
        document.querySelector(".currentroll").classList.add("prevroll");
        document.querySelector(".currentroll").classList.remove("currentroll");
    }
    if (document.querySelector(".nextroll")) {
        document.querySelector(".nextroll").classList.add("currentroll");
        document.querySelector(".nextroll").classList.remove("nextroll");
    }
    if (document.querySelector(".currentroll").nextElementSibling) {
        document
            .querySelector(".currentroll")
            .nextElementSibling.classList.add("nextroll");
    } else {
        document.querySelector(".rollimgs li").classList.add("nextroll");
    }
}


    
}










