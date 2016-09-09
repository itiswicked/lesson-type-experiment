import React from 'react';

const LessonStepListItem = props => {
  const { id, title, completed, selected, onClick, onCheck } = props;
  const handleClick = () => onClick(id);
  const handleCheckClick = (e) => {
    e.stopPropagation();
    onCheck(id)
  };

  let stepText = `${id}. ${title}`
  if (stepText.length > 30) {
    let truncatedTitle = title.slice(0, 27).trim() + "..."
    stepText = `${id}. ${truncatedTitle}`
  }

  let checkBox;
   if(completed){
     checkBox = <i className="fa fa-check-square-o complete-icon" />;
   } else {
     checkBox = <i className="fa fa-square-o complete-icon" aria-hidden="true" />;
   }

  let classes = selected ? "step-list-item selected" : "step-list-item"
  return(
    <div onClick={handleClick} className={classes}>
      <div>
        <div className="check-wrapper" onClick={handleCheckClick}>
          {checkBox}
        </div>
        <div className="title">{stepText}</div>
      </div>
    </div>
  )
}

export default LessonStepListItem;
