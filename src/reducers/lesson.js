import lessonText from './../lessonText'

let initialState = {
  lesson: lessonText,
  isFetching: false
};

const lesson = (state = initialState, action) => {
  return state;
};

export default lesson;
