import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

// import logo from './logo.svg';

// styles
import './App.css';

// pages and components
import Home from '../src/pages/Home/Home'
import About from '../src/pages/About/About'
import Contact from '../src/pages/Contact/Contact'
import News from '../src/pages/News/News'


function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <nav>
            <h1>Alex's Website</h1>
            <Link to="/">Home</Link>
            <Link to="about">About Us</Link>
            <Link to="news">News</Link>
            <Link to="contact">Contact</Link>

          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </BrowserRouter>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    </div>
  );
}

export default App;
