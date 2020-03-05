import React from "react";
import { HashRouter, Route } from 'react-router-dom' // 여러 라우터 존재
// Browser Router
import Home from "./routes/Home";
import About from "./routes/About"; // {About as Potato}
import Navigation from "./component/Navigation";
import Detail from "./routes/Detail";

// 라우터는 동작방식이 이렇다. 겹치는 URL은 동시에 렌더링해버린다.
// 컴포넌트를 렌더링할수있고 안에 요소가있으면 안에요소를 렌더링한다.

// URL에 따라서 어떤것을 렌더링 할 지 결정하는 것, 그것이 Route의 역할이다.
function App()
{
  return <HashRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
  </HashRouter>
}

export default App;
