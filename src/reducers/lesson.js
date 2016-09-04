import lessonText from './../lessonText'

import {
  SWITCH_LESSON_STEP,
  TOGGLE_COMPLETED,
  switchLessonStep,
  toggleCompleted
} from './../actions/lessons';

function parseStepText(text) {
  let splitText = text.split('TITLE BREAK');
  return {
    title: splitText[0].trim(),
    body: splitText[1].trim()
  };
}

let lessonStepArray = lessonText.split("BREAK BREAK BREAK");

let lessonSteps = lessonStepArray.slice(1).map((stepText, index) => {
  let parsedStepText = parseStepText(stepText);
  return {
    id: index,
    title: parsedStepText.title,
    body: parsedStepText.body,
    completed: false
  };
});

let lessonTitle = lessonStepArray[0];

let initialState = {
  lessonTitle,
  lessonSteps,
  currentLessonStepId: 0
};

const lesson = (state = initialState, action) => {
  switch(action.type) {
    case SWITCH_LESSON_STEP:
      return Object.assign({}, state, {
        currentLessonStepId: action.id
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
