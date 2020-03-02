import React from "react";
import { Link } from "react-router-dom";

// a 태그 대신 사용 새 페이지를 새로고침하는 대신에 SPA구현
// Link는 라우터안에있어야함, 상위컴포넌트중에 라우터가 있어야한다.
function Navigation()
{
    return <div>
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
    </div>
}

export default Navigation;