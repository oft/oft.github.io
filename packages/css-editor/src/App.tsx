import { useState } from 'react'
import logo from './logo.svg'
import './App.scss'

//import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';
//import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
//setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.72/dist/');
import { SlButton, SlSplitPanel } from '@shoelace-style/shoelace/dist/react';

import Silder from "./silder"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App flex flex__column sl-theme-dark">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        CSS-Editor
      </header>
      <main className="flex-item flex">
        <SlSplitPanel positionInPixels={200} style={{ width: '100%' } as any}>
          <div
            slot="end"
            style={{
              height: '100%'
            }}
          >
            <Silder></Silder>
          </div>
          <div
            slot="start"
            style={{
              height: '100%'
            }}
          >
            <SlButton variant="primary">Click me</SlButton>
          </div>
        </SlSplitPanel>
      </main>
      <footer className='App-footer'>
        V 1.0.1
      </footer>
    </div>
  )
}

export default App
