import React, { Component } from 'react';
import marked from 'marked';

class StepLessonContainer extends Component {
  render() {
    let rawMarkdown = document.getElementById('markdown').innerHTML;
    let dangerousHTML = { __html: marked(rawMarkdown) }
    return(
      <div>
        <p>"HEllo"</p>
        <p dangerouslySetInnerHTML={dangerousHTML}></p>
      </div>
    )
  };
};

export default StepLessonContainer;
