// src/components/Signup.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #434343, #000000);
  color: #fff;
`;

const FormContainer = styled.div`
  text-align: center;
  padding: 40px 30px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  width: 350px;
  max-width: 90%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
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
  font-weight: bold;
  margin-top: 20px;
`;

function Signup() {
  const [formData, setFormData] = useState({
    name: '', email: '', username: '', password: '', ssn: '', phone: '', account: '', recommender: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const registerUser = () => {
    if (Object.values(formData).every((field) => field)) {
      setMessage("회원가입이 완료되었습니다!");
      setTimeout(() => navigate("/game-result"), 1500);
    } else {
      setMessage("모든 필드를 입력해주세요.");
    }
  };

  return (
    <SignupContainer>
      <FormContainer>
        <h1>회원가입</h1>
        {['name', 'email', 'username', 'password', 'ssn', 'phone', 'account', 'recommender'].map((field) => (
          <Input
            key={field}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            onChange={handleChange}
            required
          />
        ))}
        <Button onClick={registerUser}>가입하기</Button>
        <p>{message}</p>
      </FormContainer>
    </SignupContainer>
  );
}

export default Signup;
