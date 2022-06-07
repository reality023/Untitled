import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createAccountFB } from '../redux/modules/account';

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = {
    id: useRef(null),
    pw: useRef(null),
    chkpw: useRef(null),
    nick: useRef(null)
  };

  // 이메일 형식 체크 - 구글
  const isEmail = (asValue) => {
    var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
  }

  // 비밀번호 형식 체크 - 구글
  const isPassword = (asValue) => {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,10}$/; //  6 ~ 10자 영문, 숫자 조합
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
  }

  const procRegister = (e) => {
    e.preventDefault();
    const email = userInfo.id.current.value;
    const password = userInfo.pw.current.value;
    const confirmPassword = userInfo.chkpw.current.value;
    const name = userInfo.nick.current.value;

    if (!isEmail(email)) {
      alert("유효한 이메일 형식이 아닙니다");
      return;
    }

    if (!isPassword(password)) {
      alert("유효한 비밀번호 형식이 아닙니다. 6 ~ 10자리의 영문, 숫자 조합으로 생성해주세요.");
      return;
    }

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }
    
    dispatch(createAccountFB(email, password, name));
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
