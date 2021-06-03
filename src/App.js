// src/App.js
import User from './components/user';
import Navbar from './components/navbar';
import { render } from '@testing-library/react';
function App() {
  let state = {
    bootcamp: 'Rakuten',
    userA: {
      firstName: "Shinya",
      avatarUrl: "https://www.rakuten-sec.co.jp/web/shared/images/og-image.gif"
    },
    userB: {
      firstName: "Hayato",
      avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Rakuten_Global_Brand_Logo.svg/440px-Rakuten_Global_Brand_Logo.svg.png"
    },
    clickCount: 0,
    backColor: 'yellow',
    bootcamp: 'Rakuten Shoken'
  }
  const colorMapper = () => {
    const hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
  }
  const clickHandler = () => {
    if (state.clickCount % 5 === 0) {
      this.setState({ 
        backColor: this.colorMapper(),
        clickCount : this.state.clickCount + 1
      });
    }
    else {
      this.setState( { clickCount : this.state.clickCount + 1 } );
    }
  }
    return (
      <div className="App">
        <Navbar></Navbar>
        <h1>React - state</h1>
        <p>Count is: {state.clickCount}</p>
        <button onClick={clickHandler}> Click me </button>
        <User
          theColor={state.backColor}
          firstName={state.userA.firstName}
          image={state.userA.avatarUrl}
          bootcampName={state.bootcamp}
           />
        <User 
          firstName={state.userB.firstName}
          image={state.userB.avatarUrl}
          bootcampName={state.bootcamp}
           />
      </div>
    );
  
}
export default App;
