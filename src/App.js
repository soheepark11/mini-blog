import React , {useState} from "react";
import Modal from "./components/Modal";
import './App.css';
//데이터 바인딩 쉽게 하는법 
//1. 변수에 넣기{중괄호 사용하기}
//2. state문법 : 변수 대신 쓰는 데이터 저장공간
//state의 장점 : 리액트를 웹앱처럼 사용하고 싶다면 중요한 데이터를 state에 저장
//state는 변경되면 html이 자동으로 리렌더링 됩니다.

//onClick={()=>{실행할 함수}}

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천' ,'강남 우동 맛집','리액트 독학']);
  let [좋아요,좋아요변경] = useState(0);

  function 제목바꾸기(){
    var newArray = [...글제목]; //spread문법
    newArray[0] = '여자 코튼 추천';
    글제목변경(newArray);
  }
  let posts = "강남 고기 맛집";
  
  return (
    <div className="App">
      <div className="black-nav">
        <div> 개발 Blog</div>
      </div>
      <button className="button" onClick={제목바꾸기}>버튼</button>
      <div className="list">
        <h3> {글제목[0]} <span onClick={()=>{ 좋아요변경(좋아요+1)}}>♥</span> {좋아요} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {글제목[1]} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {글제목[2]} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
     <Modal />
    </div>
  );
}

export default App;
