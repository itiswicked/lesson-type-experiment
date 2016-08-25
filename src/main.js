import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import StepLessonContainer from './containers/StepLessonContainer'
import lesson from './reducers/lesson'
debugger;

const store = createStore(lesson)

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <StepLessonContainer />
    </Provider>,
    document.getElementById('app')
  );
};

function whenReady(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

whenReady(render);
