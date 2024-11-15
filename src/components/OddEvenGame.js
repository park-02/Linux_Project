// src/components/OddEvenGame.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #434343, #000000);
  color: #fff;
  font-family: Arial, sans-serif;
`;

const GameBox = styled.div`
  text-align: center;
  padding: 40px 30px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  width: 350px;
  max-width: 90%;
`;

const Title = styled.h1`
  font-size: 1.8em;
  color: #00c6ff;
  margin-bottom: 20px;
`;

const BalanceText = styled.p`
  font-size: 1.2em;
  color: #00c6ff;
  margin-bottom: 15px;
`;

const Label = styled.label`
  color: #ddd;
  font-size: 1em;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1em;
  margin: 15px 0;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: linear-gradient(90deg, #00c6ff, #0072ff);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  margin-top: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0, 198, 255, 0.6);
  }
`;

const ResultText = styled.p`
  color: yellow;
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  background-color: #fff;
  color: #000;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  text-align: center;
`;

const PopupMessage = styled.p`
  font-size: 1.2em;
  color: #000;
  margin-bottom: 20px;
  text-align: center; /* 텍스트 중앙 정렬 */
`;

const PopupButton = styled.button`
  margin: 10px;
  padding: 8px 12px;
  background: #0072ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  &:hover {
    background: #0056cc;
  }
`;

function OddEvenGame() {
  const [balance, setBalance] = useState(0); // 초기 금액을 0으로 설정
  const [betAmount, setBetAmount] = useState('');
  const [choice, setChoice] = useState('');
  const [result, setResult] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // 하루 동안 보지 않기 로직
    const hidePopup = localStorage.getItem('hidePopup');
    if (!hidePopup || new Date() > new Date(hidePopup)) {
      setShowPopup(true);
    }
  }, []);

  const playGame = () => {
    if (betAmount && choice) {
      setResult("당신은 청소년 도박중독 예방 프로그램 대상자입니다.");
    } else {
      setResult("배팅 금액과 선택을 입력하세요.");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleHideForOneDay = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    localStorage.setItem('hidePopup', tomorrow);
    setShowPopup(false);
  };

  return (
    <GameContainer>
      <GameBox>
        <Title>홀짝 게임</Title>
        <BalanceText>현재 사용가능 금액: <span>{balance}원</span></BalanceText>
        <Label>배팅할 금액을 입력하세요:</Label>
        <Input
          type="number"
          value={betAmount}
          onChange={(e) => setBetAmount(e.target.value)}
          min="1"
        />
        <div>
          <input type="radio" id="odd" name="choice" value="홀" onChange={() => setChoice('홀')} />
          <Label htmlFor="odd">홀</Label>
          <input type="radio" id="even" name="choice" value="짝" onChange={() => setChoice('짝')} />
          <Label htmlFor="even">짝</Label>
        </div>
        <Button onClick={playGame}>게임 시작</Button>
        <ResultText>{result}</ResultText>
        
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <Button>회원가입</Button>
        </Link>
      </GameBox>

      {/* 안내 메시지 팝업 */}
      {showPopup && (
        <Popup>
          <PopupMessage>가입시 10만원 지급!</PopupMessage>
          <PopupButton onClick={handleClosePopup}>닫기</PopupButton>
          <PopupButton onClick={handleHideForOneDay}>하루 동안 보지 않기</PopupButton>
        </Popup>
      )}
    </GameContainer>
  );
}

export default OddEvenGame;
