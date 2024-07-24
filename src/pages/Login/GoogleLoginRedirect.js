import React, { useEffect } from "react";
import { useParams } from "react-router";


//GoogleLoginRedirect
function GoogleLoginRedirect() {
    //설정
    const params = useParams();

    //토큰
    useEffect(() => {
        localStorage.clear();
        localStorage.setItem("token", params.token);

        // 사용하려면 App.js에서 /로 라우팅해야 한다
        window.location.replace("/");
    }, []);

    return <></>;

}
export default GoogleLoginRedirect;