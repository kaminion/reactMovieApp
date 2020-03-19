import React from "react";

//모든 라우터는 Props를 가진다.
function About(props){
    console.log(props);// 찍어보면 정보많이나옴 // location.state 객체로 전달됨
    return <span>About this page : I built About Page</span>;
}

export default About;