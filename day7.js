var timerId;
var time = 0; // 초 단위

// HTML에 있는 스탑워치 불러오기
var stopwatch = document.getElementById("StopWatch");

// 시, 분, 초
var hour;
var min;
var sec;

// 시간 출력
function printTime() {
    time++;
    stopwatch.innerText = getTime();
}

// 시간 시작
function StartTime() {
    printTime();
    StopTime();
    
    // 함수 재귀호출(1초마다 시간(time) 증가)
    timerId = setTimeout(StartTime, 1000);
}

// 시간 중지
function StopTime() {
    // if (timerId != null) {
    //     clearTimeout(timerId);
    // }
    clearTimeout(timerId);
}

// 시간 초기화
function ResetTime() {
    time = 0;
    StopTime()
    stopwatch.innerText = "00:00:00";
}

// 시간(int)을 시, 분, 초 문자열로 변환
function getTime() {
    // int형으로 변환 후 저장
    hour = parseInt(String(time / (60 * 60)));
    min = parseInt(String((time - (hour * 60 * 60)) / 60)); //  hour만큼 뺀 time에 분 구하기
    sec = time % 60; 

    return '0'+String(hour)+":"+'0'+String(min)+":"+'0'+String(sec);
}