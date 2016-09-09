import React from 'react';
import { connect } from 'react-redux';
import DisplayMarkdown from './../components/DisplayMarkdown';
import LessonStepHeader from './../components/LessonStepHeader';

const LessonStep = ({ lessonTitle, lessonSteps, currentLessonStepId }) => {
  let lessonStep = lessonSteps.filter(step => step.id === currentLessonStepId)[0];
  return (
    <div className="lesson-step">
      <LessonStepHeader
        lessonTitle={lessonTitle}
        lessonStepTitle={lessonStep.title}
      />
      <div className="lesson-body">
        <DisplayMarkdown markdown={lessonStep.body} />
      </div>
    </div>
  );
}

const mapStateToProps = ({ lessonTitle, lessonSteps, currentLessonStepId }) => {
  return {
    lessonTitle,
    lessonSteps,
    currentLessonStepId
  }
};

export default connect(mapStateToProps, null)(LessonStep)
