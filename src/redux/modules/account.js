import { addDoc, collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

const LOAD = "account/LOAD";
const CREATE = "account/CREATE";

const initialState = {
  isLogin: false,
}

// 로그인 함수
export const firebase_login = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

// 로그아웃 함수
export const firebase_logout = async () => {
  await signOut(auth);
  return;
};

// 로그인 성공시 내 정보 보관
export const loadAccountFB = () => {
  return async function (dispatch) {
    onAuthStateChanged(auth, async (user) => {
      if (user) { // 로그인 중일 경우
        const account_data = await getDocs(collection(db, 'user'));
        let account = {};
        account_data.forEach(post => {
          account = { id: post.id, ...post.data() };
        });
        
        dispatch(loadAccount(true, account));
      } else { // 로그인 중이 아닐 경우
        firebase_logout();

        dispatch(loadAccount(false));
      }
    });
  };
};

// 계정 생성
export const createAccountFB = (email, password, name) => {
  return async function (dispatch) {
    await createUserWithEmailAndPassword(auth, email, password);
    await addDoc(collection(db, "user"), {
      email,
      name,
      date: Date.now(),
    });
  }
}

// Action Creators
export function loadAccount(status ,account) {
  return { type: LOAD, status, account };
}


// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD: {
      if (action.status) {
        return { isLogin: action.status,...action.account };
      } else {
        return { isLogin: action.status };
      }
    }
    default: {
      return state;
    }
  }
}
