// bucket.js

// Actions
// const LOAD = 'post/LOAD';
const CREATE = 'post/CREATE';
// const UPDATE = 'post/UPDATE';
// const REMOVE = 'post/REMOVE';

const initialState = {
    list: [
        { id : 1, title: "제목1", desc: "내용1", like: 0, image: "https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg"},
        { id : 2, title: "제목2", desc: "내용2", like: 1, image: "https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg"},
        { id : 3, title: "제목3", desc: "내용3", like: 2, image: "https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg", active: true},
        { id : 4, title: "제목4", desc: "내용4", like: 0, image: "https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg"},
        { id : 5, title: "제목5", desc: "내용5", like: 4, image: "https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg", active: true},
        { id : 6, title: "제목6", desc: "내용6", like: 0, image: "https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg"},
        { id : 7, title: "제목7", desc: "내용7", like: 0, image: "https://cdn.pixabay.com/photo/2022/04/13/15/40/amman-7130516_960_720.jpg"},
    ],
}

// Action Creators
export function createPost(post) {
    return {type: CREATE, post}
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "post/CREATE": {
            const list = [...state.list, action.post];
            return {list};
        }

        default: return state;
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