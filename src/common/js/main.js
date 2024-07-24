
// 랭킹 슬라이드 js ==========================================================================================================
const slide_img = document.getElementsByClassName('img_slide'); 
// 모든 이미지 요소를 선택

let ranking_no = document.querySelector('.ranking_no');
// 랭킹 번호 선택

const slide_ul = document.querySelector('.slide_ul'); 
// ul 요소 선택

const slide_width = slide_img[0].clientWidth; 
// 첫 번째 이미지의 너비를 기준으로 슬라이드 너비 설정

const next = document.querySelector('.next');
// next 버튼 선택

const prev = document.querySelector('.prev');
// prev 버튼 선택

let currentIndex = 0; // 현재 보여지는 이미지 인덱스

// 랭킹 순위와 슬라이드 기능 함수
function updateSlide() {
    ranking_no.textContent = currentIndex + 1 + `/${slide_img.length}`; // 순위 업데이트 (인덱스는 0부터 시작하므로 +1)
    slide_ul.style.transition = "0.3s";
    slide_ul.style.transform = `translateX(-${currentIndex * slide_width}px)`;
}

//웹 페이지 오픈 시 순위 번호 출력
window.onload=function(){
    ranking_no.textContent = currentIndex + 1 + `/${slide_img.length}`;
}


// next 버튼 클릭시 이벤트 발생
next.addEventListener('click', () => {
    if (currentIndex < slide_img.length - 1) {
        currentIndex++; 
        //currnetIndex가 length가 도달할때 까지 증가
        // 다음 이미지 인덱스로 변경
    } else {
        currentIndex = 0; 
        // currnetIndex = length가 되면 끝에 왔으므로
        //0을 대입하여 첫 번째 이미지로 이동
    }

    updateSlide();
    // updateSlide() 함수 작동
});

// prev 버튼 클릭시 이벤트 발생
prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--; 
        // currentIndex가 0이 되기까지 감소
        // 이전 이미지 인덱스로 변경

    } else {

        currentIndex = slide_img.length - 1; 
        // currentIndex가 0이 되면 첫번째로 도달했으므로
        // length-1을 대입하여 마지막 이미지로 이동
    }

    updateSlide();
    // updateSlide() 함수 작동
});
// 

