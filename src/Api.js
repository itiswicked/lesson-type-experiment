class Api {
  static getLesson() {
    return fetch('/markdown')
    .then(response => {
      if(response.ok) {
        debugger;
        return response.json();
      } else {
        throw new Error(`getLessonMarkdown: ${response.status}`)
      }
    });
  }
}

export default Api;
