import React from 'react';
import logo from '../images/logo.png';
 
const welcome = () => {
    return (
        <div className="App">
        <header className="purple">
        <h2> Homiies. </h2>
          <img src={logo} className="App-logo" alt="logo" />
          <a className="App-link"
            href="https://github.com/mikaylalisiy/homiies-idm371"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Live together.</p> 
            <p>Be responsible together.</p>
          </a>
        </header>
      </div>
    );
}
 
export default welcome;