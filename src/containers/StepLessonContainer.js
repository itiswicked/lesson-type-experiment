import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLesson } from './../actions/lessons';
import marked from 'marked';

class StepLessonContainer extends Component {
  componentWillMount() {
    this.props.getLesson()
  }

  render() {
    // let rawMarkdown = document.getElementById('markdown').innerHTML;
    // let dangerousHTML = { __html: marked(rawMarkdown) }
    return(
      <div>
        <p>"HEllo"</p>
      </div>
    )
  };
};

const mapStateToProps = ({ lesson, isFetching }) => ({
  lesson,
  isFetching
})

export default connect(mapStateToProps, { getLesson })(StepLessonContainer)
// <p dangerouslySetInnerHTML={dangerousHTML}></p>
