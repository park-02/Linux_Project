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
  padding: 12px 25px;
  font-size: 1.1em;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(90deg, #00c6ff, #0072ff);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
`;


function OddEvenGame() {
  const [balance, setBalance] = useState(100000);
  const [betAmount, setBetAmount] = useState('');
  const [choice, setChoice] = useState('');
  const [result, setResult] = useState('');

  const playGame = () => {
    if (betAmount && choice) {
      setResult("당신은 청소년 도박중독 예방 프로그램 대상자입니다.");
    } else {
      setResult("배팅 금액과 선택을 입력하세요.");
    }
  };

  return (
    <GameContainer>
      <GameBox>
        <Title>홀짝 게임</Title>
        <p>현재 사용가능 금액: <span>{balance}원</span></p>
        <label>배팅할 금액을 입력하세요:</label>
        <Input
          type="number"
          value={betAmount}
          onChange={(e) => setBetAmount(e.target.value)}
          min="1"
        />
        <div>
          <input type="radio" id="odd" name="choice" value="홀" onChange={() => setChoice('홀')} />
          <label htmlFor="odd">홀</label>
          <input type="radio" id="even" name="choice" value="짝" onChange={() => setChoice('짝')} />
          <label htmlFor="even">짝</label>
        </div>
        <Button onClick={playGame}>게임 시작</Button>
        <p>{result}</p>
      </GameBox>
    </GameContainer>
  );
}

export default OddEvenGame;
