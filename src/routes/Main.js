import { faHeart, faPlus, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { firebase_logout } from '../redux/modules/account';
import CheckLogin from "../routes/CheckLogin";

function Main() {
  const navigate = useNavigate();
  const list = useSelector(state => state.post.list);
  const account = useSelector(state => state.account);

  return (
    <Container>
      <CheckLogin />
      <ButtonGroup>
        {account.isLogin ? 
          <>
            <Link to='/write'>
              <Button>
                <FontAwesomeIcon icon={faPlus} />
                <span>글쓰기</span>
              </Button>
            </Link>
            <Button onClick={firebase_logout}>
              <FontAwesomeIcon icon={faRightToBracket} />
              <span>로그아웃</span>
            </Button>
          </>
          :
          <Link to='/login'>
            <Button>
              <FontAwesomeIcon icon={faRightToBracket} />
              <span>로그인</span>
            </Button>
          </Link>
        }
      </ButtonGroup>
      <Box>
        <Header>
          <Title>Untitled</Title>
        </Header>
        <Content>
          <CardList>
            {list.map(cardData => {
              return (
                <Card key={cardData.id}>
                  <Link to={`/detail/${cardData.id}`}>
                    <CardImage src='https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg' alt='' />
                    <CardContent>
                      <CardText>
                        <em>{cardData.title}</em>
                        <p>{cardData.desc}</p>
                      </CardText>
                      <CardHeart isActive={cardData.active}>
                        <FontAwesomeIcon icon={faHeart} />
                        <span>+ {cardData.like}</span>
                      </CardHeart>
                    </CardContent>
                  </Link>
                </Card>
              );
            })}
          </CardList>
        </Content>
      </Box>
    </Container>
  );
}

const ButtonGroup = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 200px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.div`
  width: 84px;
  height: 84px;
  font-size: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0px 0px 6px 0px #cccccc;
  color: ${props => props.theme.color.blue};
  background-color: ${props => props.theme.color.white};

  svg path {
    fill: ${props => props.theme.color.blue};
  }

  span {
    margin-top: 5px;
    font-size: 12px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1``;
const Header = styled.div`
  ${Title} {
    font-size: 48px;
    line-height: 150px;
    color: ${props => props.theme.color.black};
  }
`;

const CardList = styled.ul``;
const Card = styled.li``;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${CardList} {
    width: 100%;
    padding-bottom: 100px;
    ${Card} {
      width: inherit;
      font-size: 0;
      box-shadow: 0px 0px 6px 0px #ddd;
      border-radius: 10px;
      overflow: hidden;
    }

    ${Card} + ${Card} {
      margin-top: 40px;
    }
  }
`;

const CardImage = styled.img`
  width: 100%;
`;

const CardContent = styled.div`
  font-size: initial;
  padding: 30px;
  display: flex;
`;

const CardText = styled.div`
  width: 100%;
  em {
    display: block;
    font-size: 24px;
    height: 40px;
  }

  p {
    font-size: 16px;
  }
`;

const CardHeart = styled.div`
  flex-shrink: 0;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;

  svg path {
    fill: ${props => props.theme.color.grey};
  }

  span {
    margin-top: 10px;
    font-size: 16px;
  }

  ${props =>
    props.isActive &&
    css`
      svg path {
        fill: ${props => props.theme.color.red};
      }
    `}
`;

export default Main;
