var React = require('react');

var ReactDOMServer = require('react-dom/server');

class MyComponent extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "shopping-list"
    }, /*#__PURE__*/React.createElement("h1", null, "Shopping List for ", this.props.name), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Instagram"), /*#__PURE__*/React.createElement("li", null, "WhatsApp"), /*#__PURE__*/React.createElement("li", null, "Oculus")));
  }

}

console.log(ReactDOMServer.renderToString( /*#__PURE__*/React.createElement(MyComponent, {
  name: "222"
})));
