"use strict";

const e = React.createElement;

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Peter Argany</h1>
        <h2>
          A Software Engineer at Facebook who enjoys a good game of football,
          exploring new places and writing sexy code
        </h2>
        <a href="https://ca.linkedin.com/in/peterargany"> LinkedIn</a>
        <a href="https://github.com/PeteTheHeat"> Github</a>
        <a href="https://www.instagram.com/petetheheat81/"> Instagram</a>
        <a href="https://www.dropbox.com/s/yejnue6qrd7xq5l/Peter%20Argany%20Resume.pdf?dl=0">
          Resume
        </a>
      </div>
    );
  }
}

const domContainer = document.querySelector("#app_container");
ReactDOM.render(e(HomePage), domContainer);
