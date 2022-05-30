import {configureStore, createSlice} from "@reduxjs/toolkit";

const post = createSlice({
  name: 'postReducer',
  initialState: {
    list: [
      { id: 1, title: '제목1', desc: '내용1', like: 0, image: 'https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg', active: false },
      { id: 2, title: '제목2', desc: '내용2', like: 1, image: 'https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg', active: false },
      { id: 3, title: '제목3', desc: '내용3', like: 2, image: 'https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg', active: true },
      { id: 4, title: '제목4', desc: '내용4', like: 0, image: 'https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg', active: false },
      { id: 5, title: '제목5', desc: '내용5', like: 4, image: 'https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg', active: true },
      { id: 6, title: '제목6', desc: '내용6', like: 0, image: 'https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg', active: false },
      { id: 7, title: '제목7', desc: '내용7', like: 0, image: 'https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg', active: false },
    ],
  },
  reducers: {
    addPost: (state, action) => {
      let newId = state.list.length;
      const cardContent = {
        ...action.payload,
        id: ++newId,
        like: 0,
        active: false,
        image: 'https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg',
      };
      const list = [...state.list, cardContent];
      return { list };
    },
    modifyPost: (state, action) => {
      console.log(action);
      return {
        list: state.list.map((data) => {
          return data.id === action.payload.id ? {...data, ...action.payload.post, 
            image: 'https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg'} : data;
        }),
      };
    },

    removePost: (state, action) => {
      return {
        list: state.list.filter((data) => {
          return data.id !== action.payload
        }),
      };
    }
  }
});

export const {
  addPost,
  modifyPost,
  removePost,
} = post.actions;

export default configureStore({reducer: post.reducer});