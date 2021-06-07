// src/App.js
import User from './components/user';
import Navbar from './components/navbar';
import Home from './components/Home/home';
import Contact from './components/Contact/contact';
import About from './components/About/about';
import { render } from '@testing-library/react';
import {useState} from 'react';
import AppCSS from './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
function App() {
  let [state,setState] = useState({
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
    bootcamp: 'Rakuten Shoken',
    bootcamp: 'Rakuten',
  }); 

  const colorMapper = () => {
    const hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
  }
  const clickHandler = () => {
    if (state.clickCount % 5 === 0) {
      console.log(state.clickCount);
      setState({ 
        userA: {
          firstName: "Shinya",
          avatarUrl: "https://www.rakuten-sec.co.jp/web/shared/images/og-image.gif"
        },
        userB: {
          firstName: "Hayato",
          avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Rakuten_Global_Brand_Logo.svg/440px-Rakuten_Global_Brand_Logo.svg.png"
        },
        backColor: colorMapper(),
        clickCount : state.clickCount + 1,
        bootcamp: 'Rakuten Shoken',
        bootcamp: 'Rakuten',
      });
    }
    else {
      setState( { 
        userA: {
          firstName: "Shinya",
          avatarUrl: "https://www.rakuten-sec.co.jp/web/shared/images/og-image.gif"
        },
        userB: {
          firstName: "Hayato",
          avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Rakuten_Global_Brand_Logo.svg/440px-Rakuten_Global_Brand_Logo.svg.png"
        },
        clickCount : state.clickCount + 1,
        bootcamp: 'Rakuten Shoken',
        bootcamp: 'Rakuten', 
      } );
    }
  }
    return (
      <div className="App">
        <Router>
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
          image={state.userA.avatarUrl}
          bootcampName={state.bootcamp}
           />
           
              <Route path="/" exact component={Home}/>
              <Route path="/about"  component={About}/>
              <Route path="/contact" component={Contact}/>
           </Router>
      </div>
    );
  
}
export default App;
