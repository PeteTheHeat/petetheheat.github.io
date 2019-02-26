"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var HomePage = function (_React$Component) {
  _inherits(HomePage, _React$Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Peter Argany"
        ),
        React.createElement(
          "h2",
          null,
          "A Software Engineer at Facebook who enjoys a good game of football, exploring new places and writing sexy code"
        ),
        React.createElement(
          "a",
          { href: "https://ca.linkedin.com/in/peterargany" },
          " LinkedIn"
        ),
        React.createElement(
          "a",
          { href: "https://github.com/PeteTheHeat" },
          " Github"
        ),
        React.createElement(
          "a",
          { href: "https://www.instagram.com/petetheheat81/" },
          " Instagram"
        ),
        React.createElement(
          "a",
          { href: "https://www.dropbox.com/s/yejnue6qrd7xq5l/Peter%20Argany%20Resume.pdf?dl=0" },
          "Resume"
        )
      );
    }
  }]);

  return HomePage;
}(React.Component);

var domContainer = document.querySelector("#app_container");
ReactDOM.render(e(HomePage), domContainer);