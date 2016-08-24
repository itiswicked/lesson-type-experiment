import Api from './../Api';

const GET_LESSON_MARKDOWN = 'GET_LESSON_MARKDOWN';
const GET_LESSON_MARKDOWN_SUCCESS = 'GET_LESSON_MARKDOWN_SUCCESS';

const getLessonMarkDown = () => ({
  type: GET_LESSON_MARKDOWN
})

const getLessonMarkDownSuccess = ({ lesson }) => ({
  type: GET_LESSON_MARKDOWN_SUCCESS,
  lesson
})

const getLesson = () => dispatch => {
  dispatch(getLessonMarkDown())
  Api.getLesson()
  .then(
    data => dispatch(getLessonMarkDownSuccess(data)),
    error => console.error(`Error in getLesson: ${error}`)
  )
}

export {
  GET_LESSON_MARKDOWN,
    GET_LESSON_MARKDOWN_SUCCESS,
  getLesson
};
