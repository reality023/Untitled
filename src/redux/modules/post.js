import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

// Actions
const LOAD = 'post/LOAD';
const CREATE = 'post/CREATE';
const UPDATE = 'post/UPDATE';
const DELETE = 'post/DELETE';

// 파이어베이스 데이터 가져오기
export const loadPostFB = () => {
  return async function (dispatch) {
    // 데이터를 가져와요!
    const post_data = await getDocs(collection(db, 'untitled'));

    let post_list = [];

    // 하나씩 우리가 쓸 수 있는 배열 데이터로 만들어줍시다!
    post_data.forEach(post => {
      // 콘솔로 확인해요!
      post_list.push({ id: post.id, ...post.data() });
    });

    // 잘 만들어졌는 지 리스트도 확인해봐요! :)
    console.log(post_list);
    dispatch(loadPost(post_list));
  };
};

// 파이어베이스 글 작성
export const addPostFB = post => {
  return async function (dispatch) {
    // 파이어스토어에 추가하기를 기다려요!
    const docRef = await addDoc(collection(db, 'untitled'), post);
    // 추가한 데이터 중 id를 가져와서 bucket_data를 만들어줬어요!
    const post_data = { id: docRef.id, ...post };
    // 그럼 이제 액션을 일으키자! (수정해달라고 요청하자!)
    dispatch(addPost(post_data));
  };
};

const initialState = {
  list: [
    { id: 1, title: '제목1', desc: '내용1', like: 0, image: 'https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg', active: false },
    { id: 2, title: '제목2', desc: '내용2', like: 1, image: 'https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg', active: false },
    { id: 3, title: '제목3', desc: '내용3', like: 2, image: 'https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg', active: true },
    { id: 4, title: '제목4', desc: '내용4', like: 0, image: 'https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg', active: false },
    { id: 5, title: '제목5', desc: '내용5', like: 4, image: 'https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg', active: true },
    { id: 6, title: '제목6', desc: '내용6', like: 0, image: 'https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg', active: false },
    { id: 7, title: '제목7', desc: '내용7', like: 0, image: 'https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg', active: false },
  ],
};

// Action Creators
export function loadPost(post) {
  return { type: LOAD, post };
}

export function addPost(post) {
  return { type: CREATE, post };
}

export function modifyPost(id, post) {
  return { type: UPDATE, id, post };
}

export function removePost(id) {
  return { type: DELETE, id };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD: {
      return { list: action.post };
    }
    case CREATE: {
      return { list: [...state.list, action.post] };
    }
    case UPDATE: {
      console.log(action);
      return {
        list: state.list.map(data => {
          return data.id === action.id ? { ...data, ...action.post, image: 'https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg' } : data;
        }),
      };
    }
    case DELETE: {
      return {
        list: state.list.filter(data => {
          return data.id !== action.id;
        }),
      };
    }
    default: {
      return state;
    }
  }
}
