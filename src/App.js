import './asset/resume.pdf';
function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="content">
                    <h1>Hi, I'm Rojab Khan ;)</h1>
                    <p>I am a professional web developer and passionate photographer based on Dhaka.</p>
                    <a href="./asset/resume.pdf" target="_blank" download>Download Resume</a>
                </div>
                <div className="footer">
                    <a href="https://github.com/irojabkhan" target="_blank" rel="noreferrer">Github</a>
                    <a href="https://twitter.com/irojabkhan" target="_blank" rel="noreferrer">Twitter</a>
                    <a href="https://www.linkedin.com/in/rojab-khan-482779136/" target="_blank" rel="noreferrer">Linkedin</a>
                </div>
            </div>
        </div>
    );
}

export default App;
