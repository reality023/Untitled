import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useHistory } from 'react-router-dom';
import { createPost } from '../redux/modules/post';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import styled from 'styled-components';

function Write() {
  const dispatch = useDispatch();
  const inputTitle = useRef('');
  const inputImage = useRef('');
  const inputDesc = useRef('');

  const history = useHistory();

  // const checkExt = fileName => {
  //   const IMG_FORMAT = '\\.(bmp|gif|jpg|jpeg|png)$';
  //   if (new RegExp(IMG_FORMAT, 'i').test(fileName)) return true;
  //   alert('이미지 파일만 첨부하실 수 있습니다.   ');
  //   return false;
  // };

  const procWrite = () => {
    const title = inputTitle.current.value;
    const desc = inputDesc.current.value;
    const image = inputImage.current.value;
    // 이미지 확장 체크 정규표현식
    // checkExt(image);

    dispatch(createPost({ title, desc, image }));

    history.push('/');
  };

  return (
    <Container className='Write'>
      <Box>
        <Link to='/'>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <Name>Write</Name>
        <Title ref={inputTitle} type='text' placeholder='제목'></Title>
        <File ref={inputImage} type='file' />
        <Content ref={inputDesc} type='text' placeholder='내용' />
        <Submit onClick={procWrite}>작성하기</Submit>
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

export default Write;
