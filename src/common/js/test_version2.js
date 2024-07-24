// 탭 메뉴 선택
const tabMenu = document.querySelectorAll(".tab-menu-ul li");
// 탭 내용 선택
const tabcontent = document.querySelectorAll(".tab-content > div");

function showContent(num){
    // tabcontent의 각 요소에 적용
    tabcontent.forEach(function(item){
        // 탭 내용을 보이지 않게 하기
        item.style.display = "none";
    });
    // 선택된 탭 내용이 보이게 하기
    tabcontent[num].style.display = "block";
};

// 0번째 요소 선택
showContent(0);

tabMenu.forEach(function(item, index){
    // 탭 메뉴 클릭 이벤트 발생
    item.addEventListener("click", function(e){
        // preventDefault() 창 새로고침 방지
        e.preventDefault();
        // index 번호의 요소 선택되어 그 요소가 보이게 설정
        showContent(index);


    })


})



























