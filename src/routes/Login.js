import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

function Login() {
    const history = useHistory();
    const procLogin = () => {
        history.push("/");
    }
    return (
        <Container>
            <Box>
                <Title>Untitled</Title>
                <LoginBox>
                    <Subject>LOGIN</Subject>
                    <LoginForm>
                        <input type="text" placeholder="아이디" />
                        <input type="text" placeholder="비밀번호" />
                        <button onClick={procLogin}>Sign In</button>
                    </LoginForm>
                    <Link to="/register">
                        <NeedSignUp>
                            Don’t have any account?
                            <span>Sign Up</span>
                        </NeedSignUp>
                    </Link>
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
    height: 570px;
`;

const Title = styled.div`
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 48px;
    text-align: center;
    color: #FFFFFF;
`;

const Subject = styled.div``;
const LoginForm = styled.div``;
const LoginBox = styled.div`
    width: 100%;
    height: 470px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;

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

const NeedSignUp = styled.div`
    margin-top: 30px;
    color: #999999;

    span {
        margin-left: 10px;
        text-decoration: underline;
        color: #4186C5;
        cursor: pointer;
    }
`;

export default Login;