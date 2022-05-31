import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { firebase_join } from "../firebase/firebase";

function Register() {
  const navigate = useNavigate();
  const userInfo = {
    id: useRef(null),
    pw: useRef(null),
    chkpw: useRef(null),
    nick: useRef(null)
  }
  const procRegister = (e) => {
    e.preventDefault();
    const email = userInfo.id.current.value;
    const password = userInfo.pw.current.value;
    
    const result = firebase_join(email, password);
    console.log(result);
    navigate('/login');
  };
  return (
    <Container>
      <Box>
        <Title>Untitled</Title>
        <RegisterBox>
          <Link to='/login'>
            <BackIcon>
              <FontAwesomeIcon icon={faArrowLeft} />
            </BackIcon>
          </Link>
          <Subject>REGISTER</Subject>
          <RegisterForm onSubmit={procRegister}>
            <input type='text' placeholder='이메일' ref={userInfo.id} />
            <input type='text' placeholder='비밀번호' ref={userInfo.pw} />
            <input type='text' placeholder='비밀번호 확인' ref={userInfo.chkpw} />
            <input type='text' placeholder='닉네임' ref={userInfo.nick} />
            <button>Sign Up</button>
          </RegisterForm>
        </RegisterBox>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.bgColor.blue};
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 400px;
  height: 680px;
`;

const Title = styled.div`
  width: 100%;
  height: 100px;
  line-height: 100px;
  font-size: 48px;
  text-align: center;
  color: #ffffff;
`;

const BackIcon = styled.div``;
const Subject = styled.div``;
const RegisterForm = styled.form``;
const RegisterBox = styled.div`
  width: 100%;
  height: 580px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  ${BackIcon} {
    font-size: 24px;
    position: absolute;
    left: 40px;
    top: 44px;
    color: #444444;
    cursor: pointer;
  }

  ${Subject} {
    font-size: 36px;
    line-height: 120px;
    color: #444444;
  }

  ${RegisterForm} {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0px 40px;

    input {
      width: 100%;
      height: 60px;
      padding: 10px 20px;
      border-radius: 5px;
      border: none;
      box-shadow: 0px 0px 6px 0px #ccc;
      font-size: 16px;
      color: #444444;
    }

    input + input {
      margin-top: 20px;
    }

    button {
      margin-top: 20px;
      width: 100%;
      height: 100px;
      border: none;
      background-color: ${props => props.theme.color.blue};
      color: #ffffff;
      border-radius: 5px;
      font-size: 24px;
      box-shadow: 0px 0px 6px 0px ${props => props.theme.color.blue};
      cursor: pointer;
    }
  }
`;

export default Register;
