import React from "react";
import { Link } from "react-router-dom";

// a 태그 대신 사용 새 페이지를 새로고침하는 대신에 SPA구현
// Link는 라우터안에있어야함, 상위컴포넌트중에 라우터가 있어야한다.
// PATH name은 네비게이션에 있는것을 따름 
// 리액트 라우터 문서 참고
function Navigation()
{
    return <div>
        <Link to="/">Home</Link>
        <Link to={{
            pathname:"/about",
            state:{
                fromNavigation: false
            }
        }}>about</Link>
    </div>
}

export default Navigation;