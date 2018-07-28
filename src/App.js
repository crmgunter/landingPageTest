import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

const BackgroundImage = styled.div`
  background: black;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <BackgroundImage></BackgroundImage>
      </div>
    );
  }
}

export default App;
