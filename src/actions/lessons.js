export const SWITCH_LESSON_STEP = 'SWITCH_LESSON_STEP';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

const switchLessonStep = id => ({
  type: SWITCH_LESSON_STEP,
  id
});

const toggleCompleted = id => ({
  type: TOGGLE_COMPLETED,
  id
});


export {
  switchLessonStep,
  toggleCompleted
};
