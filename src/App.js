import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const BackgroundImage = styled.div`
  background-image: url("https://images.unsplash.com/photo-1517321579022-aa4d037c3b6e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=930721f7f08fd5fdc79bc0e107a71e08&auto=format&fit=crop&w=1050&q=80");
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-size: cover;
`;
const BackgroundFilter = styled.div`
  background: rgba(190, 189, 187, 0.65);
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const LandingText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #242423;
  border: 1px solid seashell;
  height: 80vh;
  width: 80vw;
  font-family: "Cinzel", serif;
  margin: auto;

  h1 {
    margin: auto;
    font-size: 70px;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <BackgroundImage>
          <BackgroundFilter>
            <LandingText>
              <div>
                <h3>Company Is Community</h3>
                <h1>Strategic Adventures</h1>
                <h3>Your Team Is An Adventure</h3>
              </div>
            </LandingText>
          </BackgroundFilter>
        </BackgroundImage>
      </div>
    );
  }
}

export default App;
