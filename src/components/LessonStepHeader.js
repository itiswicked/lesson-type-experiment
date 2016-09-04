import React from 'react';

const LessonStepHeader = ({lessonTitle, lessonStepTitle }) => {
  return (
    <div>
      <h1>{`${lessonTitle} - ${lessonStepTitle}`}</h1>
    </div>
  );
}

export default LessonStepHeader;
