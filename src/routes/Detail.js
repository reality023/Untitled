import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const Image = styled.img`
  width: 100%;
  height: 200px;
  background-color: red;
  margin-bottom: 30px;
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

const Icon = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  background-color: red;
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

function Detail() {
  const procRemove = (e) => {
    
  }
  return (
    <Container className='Write'>
      <Box>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <Name>Detail</Name>
        <Link to="/write"><Button>수정하기</Button></Link>
        <Link to="/"><Button onClick={procRemove}>삭제하기</Button></Link>
        <Image></Image>
        <BoardContainer>
          <BoardTitle>게시글 제목</BoardTitle>
          <BoardContent>게시글 내용게시글 내용게시글 내용게시글 내용게시글 내용게시글 내용게시글 내용게시글 내용</BoardContent>
        </BoardContainer>
        <Heart>
          <Icon></Icon>
          <HeartTitle>좋아요 2개</HeartTitle>
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

export default Detail;
