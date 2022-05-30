// bucket.js

// Actions
// const LOAD = 'post/LOAD';
const CREATE = 'post/CREATE';
const UPDATE = 'post/UPDATE';
const DELETE = 'post/DELETE';

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
export function createPost(post) {
  return { type: CREATE, post };
}

export function updatePost(id, post) {
  return { type: UPDATE, id, post };
}

export function deletePost(id) {
  return { type: DELETE, id };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE: {
      let newId = state.list.length;
      const cardContent = {
        ...action.post,
        id: ++newId,
        like: 0,
        active: false,
        image: 'https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg',
      };
      const list = [...state.list, cardContent];
      return { list };
    }
    case UPDATE: {
      console.log(action);
      return {
        list: state.list.map((data) => {
          return data.id === action.id ? {...data, ...action.post, 
            image: 'https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg'} : data;
        }),
      };
    }
    case DELETE: {
      return {
        list: state.list.filter((data) => {
          return data.id !== action.id
        }),
      };
    }
    default: {
      return state;
    }
  }
}

// // Action Creators
// export function loadWidgets() {
//     return { type: LOAD };
// }

// export function createWidget(widget) {
//     return { type: CREATE, widget };
// }

// export function updateWidget(widget) {
//     return { type: UPDATE, widget };
// }

// export function removeWidget(widget) {
//     return { type: REMOVE, widget };
// }
