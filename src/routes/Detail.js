import { faArrowLeft, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { removePost } from '../redux/modules/post';

function Detail() {
  const dispatch = useDispatch();
  const allData = useSelector(state => state.post.list);
  const cardData = useParams();
  const [data] = allData.filter(v => v.id === cardData.id);
  console.log(data);
  const procRemove = e => {
    dispatch(removePost(cardData.id));
  };
  return (
    <Container className='Write'>
      <Box>
        <Link to='/'>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <Name>Detail</Name>
        <Link to={`/write/${cardData.id}`}>
          <Button>수정하기</Button>
        </Link>
        <Link to='/'>
          <Button onClick={procRemove}>삭제하기</Button>
        </Link>
        <Card>
          <CardImage src={`${data.image}`}></CardImage>
        </Card>
        <BoardContainer>
          <BoardTitle>{data.title}</BoardTitle>
          <BoardContent>{data.desc}</BoardContent>
        </BoardContainer>
        <Heart>
          <FontAwesomeIcon icon={faHeart} />
          <HeartTitle>좋아요 {data.like}개</HeartTitle>
        </Heart>
        <InputContainer>
          <ReplyInput placeholder='댓글을 입력해주세요.'></ReplyInput>
          <ReplyButton>REPLY</ReplyButton>
        </InputContainer>
        <ReplyContainer>
          <Nickname>공쥬99</Nickname>
          <Content>너무 예뻐요 ㅎ</Content>
          <Date>2022-05-22</Date>
        </ReplyContainer>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;
`;

const Name = styled.h1`
  font-size: 26px;
  margin-bottom: 40px;
`;

const Box = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardImage = styled.img``;
const Card = styled.div`
  width: 100%;
  ${CardImage} {
    border-radius: 10px;
    width: inherit;
  }
`;

const BoardContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const BoardTitle = styled.span`
  font-size: 24px;
  display: inline-block;
  margin-bottom: 20px;
`;

const BoardContent = styled.span``;
const Heart = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const HeartTitle = styled.span``;

const InputContainer = styled.div`
  width: 90%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ReplyInput = styled.input`
  width: 73%;
  background-color: ${props => props.theme.color.blue};
`;

const ReplyButton = styled.button`
  width: 25%;
`;

const ReplyContainer = styled.div`
  width: 90%;
  height: 45px;
  display: flex;
  align-items: center;
  border: 1px solid gray;
  padding: 20px;
`;
const Nickname = styled.span`
  flex: 0.8;
`;
const Content = styled.span`
  flex: 1.2;
`;
const Date = styled.span``;

const Button = styled.div``;

export default Detail;
