import React, { Component } from 'react';

// props.location
class Detail extends Component{

    
    componentDidMount()
    {
        // history객체에 redirect 호출 함수 객체가 있다.
        const { location, history } = this.props;
        console.log(history)
        console.log(location.state);
        if(location.state === undefined)
        {
            history.push("/");
        }
    }
    
    // 렌더가 먼저 실행됨 
    render()
    {
        const { location } = this.props;
        // 1. 여기서 체크하는 방식, 리턴하면 componentDidmount실행
        if(location.state === undefined) return null;

        return <span>{ location.state.title }</span>;
    }
    
}

export default Detail;