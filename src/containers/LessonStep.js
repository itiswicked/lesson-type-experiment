import React from 'react';
import { connect } from 'react-redux';
import DisplayMarkdown from './../components/DisplayMarkdown';

const LessonStep = ({ lessonSteps, currentLessonStep }) => {
  let lessonStep = lessonSteps.filter(step => step.id === currentLessonStep);
  debugger;
  return <DisplayMarkdown markdown={lessonStep.body} />;
}

const mapStateToProps = ({ lessonSteps, currentLessonStep }) => {
  return {
    lessonSteps,
    currentLessonStep
  }
};
// debugger;
export default connect(mapStateToProps, null)(LessonStep)
