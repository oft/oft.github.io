import React from "react"
import {PageBase} from "./PageBase.jsx"
export class HomePage extends React.Component {
  render() {
    return <PageBase>
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
    </div>
    </PageBase>
  }
}