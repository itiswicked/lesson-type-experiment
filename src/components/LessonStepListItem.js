import React from 'react';

const LessonStepListItem = props => {
  const { id, title, checked, selected, onClick, onCheck } = props;
  const handleClick = () => onClick(id);
  const handleCheckClick = (e) => {
    e.stopPropagation();
    onCheck(id)
  };

  let stepText = `${id}. ${title}`
  let selectedText = selected ? "true" : "false";
  let completedText = checked ? "true" : "false";

  return(
    <li onClick={handleClick}>
      <span>{stepText}</span><br/>
      <span>selected: {selectedText}</span>
      <h1 onClick={handleCheckClick}>Completed: {completedText}</h1>
    </li>
  )
}

export default LessonStepListItem;
