var member1 = {
	name : "강수연",
	pnum : "010-1234-5678",
}

var member2 = {
	name : "박예지",
	pnum : "010-9876-5432",
}

var member3 = {
	name : "전지우",
	pnum : "010-1298-3476",
}

var member4 = {
	name : "최가희",
	pnum : "010-5689-3465",
}

var count = 0;

var selname;
var selnum;

function phonebtn1() {
    count++;
    document.getElementById('phone1').style.color = "rgb(69, 197, 122)";
    selname = document.getElementById('phone1').innerText;
    selnum = member1.pnum;
}

function phonebtn2() {
    count++;
    document.getElementById('phone2').style.color = "rgb(69, 197, 122)";
    selname = document.getElementById('phone2').innerText;
    selnum = member2.pnum;
}

function phonebtn3() {
    count++;
    document.getElementById('phone3').style.color = "rgb(69, 197, 122)";
    selname = document.getElementById('phone3').innerText;
    selnum = member3.pnum;
}

function phonebtn4() {
    count++;
    document.getElementById('phone4').style.color = "rgb(69, 197, 122)";
    selname = document.getElementById('phone4').innerText;
    selnum = member4.pnum;
}

function beforecall(){
    if(count != 0){
        setTimeout(() => { callevent(); }, 2000);
    }else{
        alert("전화 걸 사람을 선택해주세요.");
    }
}

function callevent(){
        document.getElementById("phonebox").style.display = "none";
        document.getElementById("book").style.display = "none";

        document.getElementById("pnum").innerText = selnum;
        document.getElementById("pnum").style.display = "inline-block";

        document.getElementById("state").innerText = selname;
        document.getElementById("call").innerText = "끊기";
}


document.getElementById('call').addEventListener('click', beforecall);

document.getElementById('phone1').addEventListener('click', phonebtn1);
document.getElementById('phone2').addEventListener('click', phonebtn2);
document.getElementById('phone3').addEventListener('click', phonebtn3);
document.getElementById('phone4').addEventListener('click', phonebtn4);
