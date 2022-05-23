import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useHistory } from 'react-router-dom';
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

const Title = styled.input`
  width: 100%;
  height: 50px;
`;

const File = styled.input`
  width: 100%;
  height: 150px;
`;

const Content = styled.input`
  width: 100%;
  height: 250px;
`;

const Submit = styled.button`
  width: 100%;
  height: 50px;
  cursor: pointer;
`;

function Write() {
  const history = useHistory();
  const procWrite = () => {
    history.push("/")
  }
  return (
    <Container className='Write'>
      <Box>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <Name>Write</Name>
        <Title type='text' placeholder='제목'></Title>
        <File type='file' />
        <Content type='text' placeholder='내용' />
        <Submit onClick={procWrite}>작성하기</Submit>
      </Box>
    </Container>
  );
}

export default Write;
