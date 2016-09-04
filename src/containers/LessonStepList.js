import React from 'react';
import LessonStepListItem from './../components/lessonStepListItem';
import { connect } from 'react-redux';

import { switchLessonStep, toggleCompleted } from './../actions/lessons';

const LessonStepList = (props) => {

  let stepListItems = props.lessonSteps.map(step => {
    let selected = step.id === props.currentLessonStepId;
    return (
      <LessonStepListItem
        {...step}
        id={step.id}
        key={step.id}
        onClick={props.switchLessonStep}
        onCheck={props.toggleCompleted}
      />
    );
  });

  return (
    <div className="lesson-step-list">
      <ul className="step-list-ul">
        {stepListItems}
      </ul>
    </div>
  )
};

const mapStateToProps = ({ lessonSteps, currentLessonStepId }) => ({
  lessonSteps,
  currentLessonStepId
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
