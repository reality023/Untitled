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
  list: [],
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
