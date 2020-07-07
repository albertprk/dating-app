import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <p className="headerText" alt="My sexual orientation is">My sexual <br/> orientation is</p>
        <p className="selectionInstruction" alt="Select one">Select one</p>
        <form className="selectionForm">
            <label className="selectionLabel" for="Straight" alt="Straight">Straight</label>
            <input className="selectionOption" name="orientation" type="radio" value="Straight"/><br/>
            <label className="selectionLabel" for="Gay" alt="Gay">Gay</label>
            <input className="selectionOption" name="orientation" type="radio" value="Gay" /><br/>
            <label className="selectionLabel" for="Lesbian" alt="Lesbian">Lesbian</label>
            <input className="selectionOption" name="orientation" type="radio" value="Lesbian"/><br/>
            <label className="selectionLabel" for="Bisexual" alt="Bisexual">Bisexual</label>
            <input className="selectionOption" name="orientation" type="radio" value="Bisexual"/><br/>
            <label className="selectionLabel" for="Asexual" alt="Asexual">Asexual</label>
            <input className="selectionOption" name="orientation" type="radio" value="Asexual"/><br/>
            <input className="privacyOption" name="Privacy" type="checkbox"/>
            <label className="privacyLabel" for="Privacy" alt="Show my orientation on my profile">
                Show my orientation on my profile</label><br/>
            <input className="continueButton" type="button" value="CONTINUE"/>
        </form>
    </div>
  );
}

function Header() {
    return (
        <div className="screenHeader">
            <button className="backButton">{"<"}</button>
            <button className="skipButton">SKIP</button>
        </div>
    )
}

export default App;
