import lessonText from './../lessonText'

import {
  SWITCH_LESSON_STEP,
  TOGGLE_COMPLETED,
  switchLessonStep,
  toggleCompleted
} from './../actions/lessons';

let lessonSteps = lessonText.split("BREAK BREAK BREAK").map((stepText, index) => ({
    id: index,
    body: stepText,
    completed: false
}));

let initialState = {
  lessonSteps,
  currentLessonStep: 0
};

const lesson = (state = initialState, action) => {
  switch(action.type) {
    case SWITCH_LESSON_STEP:
      return Object.assign({}, state, {
        currentLessonStep: action.id
      })
    case TOGGLE_COMPLETED:
    let newLessonSteps = state.lessonSteps.map(step => {
      if(step.id === action.id){
        return { ...step, completed: !step.completed }
      } else {
        return step;
      }
    });
    return Object.assign({}, state, {
      lessonSteps: newLessonSteps
    });
    default:
      return state;

  }
};

export default lesson;
