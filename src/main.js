import { createStore } from 'redux';
import { combineReducers } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

import StepLessonContainer from './containers/StepLessonContainer'
// debugger;
ReactDOM.render(
  <StepLessonContainer />,
  document.getElementById('app')
)
