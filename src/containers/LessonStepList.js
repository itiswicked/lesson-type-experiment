import React from 'react';
import LessonStepListItem from './../components/lessonStepListItem';
import { connect } from 'react-redux';

import { switchLessonStep, toggleCompleted } from './../actions/lessons';

const LessonStepList = (props) => {

  let stepListItems = props.lessonSteps.map(step => {
    let title = `Theee Array`;
    let selected = step.id === props.currentLessonStep;
    return (
      <LessonStepListItem
        title={title}
        checked={step.completed}
        selected={selected}
        id={step.id}
        key={step.id}
        onClick={props.switchLessonStep}
        onCheck={props.toggleCompleted}
      />
    );
  });

  return(
    <ul>
      {stepListItems}
    </ul>
  )
};

const mapStateToProps = ({ lessonSteps, currentLessonStep }) => ({
  lessonSteps,
  currentLessonStep
})

const mapDispatchToProps = dispatch => {
  return {
    toggleCompleted: (id) => {
      dispatch(toggleCompleted(id))
    },
    switchLessonStep: (id) => {
      dispatch(switchLessonStep(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LessonStepList);
