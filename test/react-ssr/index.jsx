var React = require('react');
var ReactDOMServer = require('react-dom/server');

class MyComponent extends React.Component {
  render() {
    return <div className="shopping-list">
      <h1>Shopping List for {this.props.name}</h1>
      <ul>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>Oculus</li>
      </ul>
    </div>;
  }
}

console.log(ReactDOMServer.renderToString(<MyComponent name="222" />));