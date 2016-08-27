import React, { Component } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';

class StepLessonContainer extends Component {
  render() {
    let rawMarkdown = this.props.lesson;
    let dangerousHTML = { __html: marked(rawMarkdown) }
    debugger;
    return(
      <div>
        <p dangerouslySetInnerHTML={dangerousHTML}></p>
      </div>
    )
  };
};

const mapStateToProps = ({ lesson }) => ({
  lesson
})

export default connect(mapStateToProps, null)(StepLessonContainer)
