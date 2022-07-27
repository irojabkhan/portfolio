import React from 'react';
import { saveAs } from "file-saver";

function App() {

    const saveFile = () => {
        saveAs(
          "https://drive.google.com/file/d/17jS-euCadC0TgepCWJGc3fZZx8ubOQ9P/view?usp=sharing",
          "rojab-resume.pdf"
        );
      };

    return (
        <div className="App">
            <div className="container">
                <div className="content">
                    <h1>Hi, I'm Rojab Khan ;)</h1>
                    <p>I am a professional web developer and passionate photographer based on Dhaka.</p>
                    <button onClick={saveFile}>Download Resume</button>
                </div>

                <div className="footer">
                    <a href="https://github.com/irojabkhan" target="_blank" rel="noreferrer">Github</a>
                    <a href="https://twitter.com/irojabkhan" target="_blank" rel="noreferrer">Twitter</a>
                    <a href="https://www.linkedin.com/in/rojab-khan-482779136/" target="_blank" rel="noreferrer">Linkedin</a>
                    <a href="mailto:irojabkhan@gmail.com" target="_blank" rel="noreferrer">Mail me</a>
                </div>
            </div>
        </div>
    );
}

export default App;
