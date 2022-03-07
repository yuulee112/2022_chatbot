
var msg = ['코','드','메','이','트'];
var colors = ["pink", "blue", "green", "purple", "black"];

var i = 0;
// 버튼 클릭 시
function Open() {
    var text = document.getElementById("txt");
    
    if(i < msg.length){
        text.innerHTML += msg[i];
        text.style.color = colors[i];
        i++;
    }
}