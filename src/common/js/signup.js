document.forms.method="POST"

// form 확인 함수
function checkForm(){

    // 회원 아이디 입력창 선택
    const userID = document.querySelector("#username");
    // 회원 비밀번호 입력창 선택
    const userPW = document.querySelector("#password");
    // 회원 비밀번호 재확인 입력창 선택
    const confirm_user_PW = document.querySelector("#conform_password")

    // 아이디 검사
    var regexID = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,12}$/;
    // 비밀번호 검사
    var regexPassword = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,12}$/;

    // 아이디 유효성 검사
    function checkUserID(){
        if(regexID.test(userID.value)){
            return true;
        }
        else{
            alert("아이디 영소문자, 숫자를 포함한 6~12자리이어야 합니다.")
            userID.focus();
            return false;
        }
    }// end checkUserID()

    function checkPW(){
        

    // 비밀번호 유효성 검사
    // test(): 비교하여 문자가 포함되어 있으면 return true
    // changePassword가 조건을 만족하면
    if(regexPassword.test(userPW.value)){
        // 비밀번호와 비밀번호 재확인이 일치할 시
        if(userPW.value === confirm_user_PW.value){
            return true

        }
        // 비밀번호와 비밀번호 재확인이 일치하지 않을 시
        else{
            alert("비밀번호가 일치하지 않습니다")
            // 비밀번호 재확인에 커서 이동
            confirm_user_PW.focus()
        }

    }
    // 비밀번호가 조건에 만족하지 않다면
    else{
        alert("비밀번호는 영소문자, 숫자를 포함한 8~12자리로 만드셔야 합니다.")
        // 비밀번호에 커서 이동
        userPW.focus();
        return false;
    }
    } //end checkPW()


    // 아이디 확인, 비밀번호 확인 둘다 완료시
    if(checkUserID() && checkPW()){
        return true;
    }
    // 아닐시
    else{
        return false;
    }

} //end  checkForm()



