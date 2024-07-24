document.addEventListener("DOMContentLoaded", () => {

    function withdrawPassword(event) {
        event.preventDefault(); // 폼 제출을 막음
        const checkPassword = document.querySelector(".check_password");
        const modalPage = document.querySelector(".modal_page");
        const withdrawYes = document.querySelector(".withdraw_yes");
        const withdrawExit = document.querySelector(".withdraw_exit");

        if(checkPassword.value === ""){
            alert("비밀번호를 입력해주시요");
            modalPage.style.display = "none";
        }
        else{
            
            // 모달 창 표시
            modalPage.style.display = "flex";
        
        }

            


        // "탈퇴하겠습니다" 버튼 클릭 이벤트 처리
        withdrawYes.addEventListener("click", () => {
            alert("탈퇴되었습니다.")
            modalPage.style.display = "none";

            //비밀번호를 서버에 넘기는 작업해야 함

            // return true;
            location.replace("main.html");
        });

        // "X" 버튼 클릭 이벤트 처리
        withdrawExit.addEventListener("click", () => {
            modalPage.style.display = "none";

        });
    // 폼이 실제로 제출되지 않도록 방지
        return false; 
    }

    // 함수 호출
    const withdrawBtn = document.querySelector(".withdraw_btn");
    withdrawBtn.addEventListener("click", withdrawPassword);
});
