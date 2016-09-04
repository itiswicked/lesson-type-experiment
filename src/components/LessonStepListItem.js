import React from 'react';

const LessonStepListItem = props => {
  debugger
  const { id, title, checked, selected, onClick, onCheck } = props;
  const handleClick = () => onClick(id);
  const handleCheckClick = (e) => {
    e.stopPropagation();
    onCheck(id)
  };

  let stepText = `${id}. ${title}`
  let checkBox;
   if(checked){
     checkBox = <i className="fa fa-check-square-o" aria-hidden="true" />;
   } else {
     checkBox = <i className="fa fa-square-o" aria-hidden="true" />;
   }
  let selectedText = selected ? "true" : "false";
  let classNames = selected ? "step-list-item selected" : "step-list-item"

  return(
    <li onClick={handleClick} className={classNames}>
      <div className="check-wrapper" onClick={handleCheckClick}>
        {checkBox}
      </div>
      <span>{stepText}</span><br/>
    </li>
  )
}

export default LessonStepListItem;
