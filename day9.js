function moives(title, year, genre){
    this.title = title;
    this.year = year;
    this.genre = genre;
}

// 1번 버튼 클릭 시
function movie1() {
    //객체 생성
    var m1 = new moives("알라딘", 2019, "모험");

    var title = document.getElementById("title");
    var year = document.getElementById("year");
    var genre = document.getElementById("genre");
    title.innerHTML = m1.title;
    year.innerHTML = m1.year;
    genre.innerHTML = m1.genre;
    
}

// 2번 버튼 클릭 시
function movie2() {
    //객체 생성
    var m2 = new moives("모가디슈", 2021, "액션");

    var title = document.getElementById("title");
    var year = document.getElementById("year");
    var genre = document.getElementById("genre");
    title.innerHTML = m2.title;
    year.innerHTML = m2.year;
    genre.innerHTML = m2.genre;
    
}

// 3번 버튼 클릭 시
function movie3() {
    //객체 생성
    var m3 = new moives("밀정", 2016, "액션");

    var title = document.getElementById("title");
    var year = document.getElementById("year");
    var genre = document.getElementById("genre");
    title.innerHTML = m3.title;
    year.innerHTML = m3.year;
    genre.innerHTML = m3.genre;
    
}