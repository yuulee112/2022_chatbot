var talking = 
[
	{
		"question" : "안녕",
		"answer" : "안녕! 반가워!"
	},
	{
		"question" : "이름",
		"answer" : "내 이름은 냥냥이"
	},
	{
		"question" : "취미",
		"answer" : "프로그래밍 하기!"
	}
]

var question = ""; //사용자의 질문을 임시 저장할 변수
var answer = ""; //사용자의 대답을 임시 저장할 변수

var key = 0; // 키 값을 이용하여 말을 배우는 상황인지 아닌지 판별


// 따라하기 체크 여부
var copycat;

// talking에 값 추가하는 함수
function push_json(){
	talking.push({"question": `${question}`, "answer": `${answer}`}); //json이라는 데이터에 값을 추가하는 push함수
}

function clickevent(){
    var talk = document.getElementById("talk"); //말주머니
    var value = document.getElementById("text").value;  //사용자 입력값

    if(key == 1){
		if(value == "네"){
			talk.innerHTML = "대답을 입력해주세요!";
			key = 2;
		}
		else{
			talk.innerHTML = "냐~!";
			key = 0;
		}
		return;
	}

    if(key == 2){
        talk.innerHTML = "말을 배웠다 냥!";
		answer = value; //전역변수 answer값에 사용자의 입력을 저장
        key = 0;  //키 값 0으로 초기화
		push_json(); //json 데이터에 값을 추가하는 함수 (추후 생성)
	}

    if(copycat == 0 || copycat == 1){
        //그만하기 여부확인(0: '그만' 기재 / -1: '그만' 기재 X)
        if(value.indexOf('그만') == 0){
            copycat = -1;
        }else if(value.indexOf('그만') == -1){
            copycat = 1;
        }
    }


    if(copycat != 1 && copycat != -1){
        //따라하기 여부확인(0: '따라' 기재 / -1: '따라' 기재 X)
        if(value.indexOf('따라') == 0){
            copycat = value.indexOf('따라');
        }
    }


    if(copycat == undefined){ // 따라하기 아닐 때
        if(value == ""){
            alert("명령을 입력하세요.")
        }else if(value == "불 꺼줘"){
            document.getElementById("back").style.backgroundColor="black";
            talk.style.color="white";
            talk.innerText = "어두워졌어요!"
        }else if(value == "불 켜줘"){
            document.getElementById("back").style.backgroundColor="white";
            talk.style.color="black";
            talk.innerText = "밝아졌어요!"
        }else{
            //talking에 저장된 대답 말하기
            for(let i = 0; i < talking.length; i++){
                if(value == talking[i].question){ 
                    talk.innerHTML = talking[i].answer; 
                    return; 
                }
            }
            if(answer == ""){
                talk.innerText = "말을 가르쳐 주실래요?(네 or 아니요)";
                question = value; //사용자의 질문을 미리 저장
                key = 1; //조건문으로 진입하게 만들 키 값 변경
            }
        }
    }else if(copycat == 0){ // 따라하기 시작
        talk.innerText = "냥냥냥!(따라하기 시작)"
    }else if(copycat == 1){
        talk.innerText = value+" 냥!";
    }else if(copycat == -1){ // 따라하기 종료
        talk.innerText = "냐냐냥!(따라하기 종료)"
        copycat = undefined;
    }
}