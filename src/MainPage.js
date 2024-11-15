import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>메인 페이지</h1>
      <Link to="/OddEvenGame">홀짝 게임</Link>
      <br />
      <Link to="/Signup">회원가입</Link>
    </div>
  );
}

export default MainPage;
