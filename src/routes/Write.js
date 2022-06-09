import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { storage } from '../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addPostFB, modifyPost } from '../redux/modules/post';

function Write() {
  const dispatch = useDispatch();
  const params = useParams();
  const dataList = useSelector(state => state.post.list);
  const inputTitle = useRef('');
  const inputDesc = useRef('');
  const [uploadImage, setUploadImage] = useState('');
  let [mode, setMode] = useState('ADD');

  useEffect(() => {
    if (Object.keys(params).length) {
      setMode('MODIFY');

      const data = dataList.filter(value => value.id === parseInt(params.id))[0]; // params가 있을 경우 값을 찾아 0번째 값을 저장
      inputTitle.current.value = data.title;
      inputDesc.current.value = data.desc;
    }
  }, []);

  const navigate = useNavigate();

  // 파일 업로드 로직
  const selectFile = async event => {
    const imageFile = event.target.files[0];
    const storageRef = ref(storage, `images/${imageFile.name}`);
    try {
      await uploadBytes(storageRef, imageFile);
      const fileDownloadUrl = await getDownloadURL(storageRef);
      console.log(fileDownloadUrl);
      setUploadImage(fileDownloadUrl);
      // console.log('업로드 정보: ', uploadImage);
      // console.log('다운로드 정보: ', fileDownloadUrl);
    } catch (error) {
      alert('이미지 업로드에 실패하였습니다.');
    }
  };
  // const checkExt = fileName => {
  //   const IMG_FORMAT = '\\.(bmp|gif|jpg|jpeg|png)$';
  //   if (new RegExp(IMG_FORMAT, 'i').test(fileName)) return true;
  //   alert('이미지 파일만 첨부하실 수 있습니다.   ');
  //   return false;
  // };

  const procWrite = () => {
    const title = inputTitle.current.value;
    const desc = inputDesc.current.value;
    // 이미지 확장 체크 정규표현식
    // checkExt(image);
    if (mode === 'MODIFY') {
      // 수정 모드일 경우
      // dispatch(modifyPost(parseInt(params.id), { title, desc, image: uploadImage }));
    } else if (mode === 'ADD') {
      dispatch(addPostFB({ title, desc, image: uploadImage, like: 0, active: false }));
    }

    navigate('/');
  };

  return (
    <Container className='Write'>
      <Box>
        <Link to='/'>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <Name>Write</Name>
        <Title ref={inputTitle} type='text' placeholder='제목'></Title>
        <File type='file' onChange={selectFile} />
        <Card>
          <CardImage src={uploadImage} alt='' />
        </Card>
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

const CardImage = styled.img``;
const Card = styled.div`
  width: 100%;
  ${CardImage} {
    border-radius: 10px;
    width: inherit;
  }
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
