import React from "react";
import { useParams } from "react-router";


//회원가입 이메일/아이디 확인
function SignUpEmailConfirm() {
    const params = useParams();

    if (params.jwt !== null) {
        localStorage.clear();
        localStorage.setItem("token", params.jwt);
        console.log("response.data.token:  " + params.jwt);
        window.location.replace("/");
    }

    return <></>;
}

export default SignUpEmailConfirm;