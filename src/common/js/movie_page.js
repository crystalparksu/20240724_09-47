// 탭 메뉴 선택
const tabMenu = document.querySelectorAll(".tab-menu-ul li");

// 탭 내용 선택
const tabcontent = document.querySelectorAll(".tab-content > div")

// 선택된 탭 내용 보여주는 함수
function showContent(no){
    // tabcontent의 각 요소에 적용
    tabcontent.forEach(function(item){
        // 탭 내용이 보이지 않게 하기
        item.style.display = "none";
    });

    //특정 tabcontent는 보이게 하기
    tabcontent[no].style.display = "block";

};

// 0번째 요소 선택
showContent(0);

// 각 tabmenu에 적용
tabMenu.forEach(function(item, index){
    // 탭 메뉴 클릭시 이벤트 발생
    item.addEventListener("click", function(event){
        // preventDefault(): 창 새로고침 방지 
        event.preventDefault();
        // index번호의 요소가 선택되어 그 요소가 보이게 설정
        showContent(index);
    })



})



// 찜 버튼

// 하트 모양 요소 선택
const bookMark = document.querySelector(".book_mark button")

// 클릭시 색 변경 함수 
bookMark.addEventListener("click", (item) => {
    // 현재 색 저장
    const currnetColor = item.target.style.color;

    // 현재 색이 없을 경우 
    if(currnetColor === ""){
        // 색을 변경
        item.target.style.color = "#30fff5";
    }
    // 현재 색이 있을 경우
    else{
        // 색을 제거
        item.target.style.color = "";
    }

});
























