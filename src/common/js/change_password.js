
// 비밀번호 확인 함수
function checkPW(){


    // 비밀번호 입력값 선택
const newPassword = document.querySelector(".new_password").value;
// '비밀번호 재확인' 값 선택
const confirmPassword = document.querySelector(".confirm_password").value;



// ^ : 문자열의 시작을.
// (?=.*[a-zA-Z]) : 최소한 한 개의 알파벳 문자를 포함해야 함
// (?=.*\d) : 최소한 한 개의 숫자를 포함해야 함
// (?=.*[!@#$%^&*()]) : 최소한 한 개의 특수문자를 포함해야 함
// [a-zA-Z\d!@#$%^&*()]{8,12} : 영문, 숫자, 특수문자의 조합으로 이루어진 8자 이상 12자 이하의 문자열


// 특수기호를 반드시 포함, 영소문자&숫자&특수문자 조합으로 이루어진 8~12자의 문자열 비교
var regexPassword = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,12}$/;

// 비밀번호 유효성 검사

    
    // test(): 비교하여 문자가 포함되어 있으면 return true
    // changePassword가 조건을 만족하면
    if(regexPassword.test(newPassword)){
        // 비밀번호와 비밀번호 재확인이 같다면
        if(newPassword === confirmPassword){
            window.location.href = "mypage.html"
            return true;
        }
        // 두 비밀번호가 일치하지 않을 시
        else{
            alert("비밀번호가 일치하지 않습니다")
            return false;
        }
    }
    // 비밀번호가 조건에 만족하지 않다면
    else{
        alert("비밀번호는 영소문자, 숫자를 포함한 8~12자리로 만드셔야 합니다.")
        return false;
    }
}

























