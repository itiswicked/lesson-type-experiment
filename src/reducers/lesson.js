import {
  GET_LESSON_MARKDOWN,
  GET_LESSON_MARKDOWN_SUCCESS
} from './../actions/lessons'

let initialState = {
  lesson: "",
  isFetching: false
};

const lesson = (state = initialState, action) => {
  switch(action.type) {
    case GET_LESSON_MARKDOWN:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_LESSON_MARKDOWN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false, lesson: action.lesson
      });
    default:
      return state;
  }
};

export default lesson;
