import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';

function Register() {
    const history = useHistory();
    const procRegister = () => {
        history.push("/login")
    }
    return (
        <Container>
            <Box>
                <Title>Untitled</Title>
                <LoginBox>
                    <Link to="/login">
                        <BackIcon>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </BackIcon>
                    </Link>
                    <Subject>REGISTER</Subject>
                    <LoginForm>
                        <input type="text" placeholder="아이디" />
                        <input type="text" placeholder="비밀번호" />
                        <input type="text" placeholder="비밀번호 확인" />
                        <input type="text" placeholder="닉네임" />
                        <button onClick={procRegister}>Sign Up</button>
                    </LoginForm>
                </LoginBox>
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
    color: #FFFFFF;
`;

const BackIcon = styled.div``;
const Subject = styled.div``;
const LoginForm = styled.div``;
const LoginBox = styled.div`
    width: 100%;
    height: 580px;
    background-color: #FFFFFF;
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

    ${LoginForm} {
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
            color: #FFFFFF;
            border-radius: 5px;
            font-size: 24px;
            box-shadow: 0px 0px 6px 0px ${props => props.theme.color.blue};
            cursor: pointer;
        }
    }
`;

export default Register;