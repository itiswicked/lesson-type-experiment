import React from 'react';
import marked from 'marked';


const DisplayMarkdown = ({ markdown }) => {
  let html = { __html: marked(markdown) };
  return <div dangerouslySetInnerHTML={html} />;
}

export default DisplayMarkdown;
