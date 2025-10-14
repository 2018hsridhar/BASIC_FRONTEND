import logo from './logo.svg';
import './App.css';

// Build user interface with React
// Create functional components
// JSX syntax
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function AppWrapper() {
  return (
    <div>
      <Welcome name="Hari" />
      <Welcome name="Aanth" />
    </div>
  );
}

// How about a bunch of shorts where someone can upload thumbnails
// Of them teaching programming concepts or system design skills

// Display : thumnails, videos, and video descriptions.
function ShortsList({ shorts, emptyHeading }) {
  const numberOfShorts = shorts.length;
  return (
    <div className="shorts-list">
      {numberOfShorts === 0 ? (
        <h2>{emptyHeading}</h2>
      ) : (
        shorts.map((short) => (
          <div key={short.id} className="video-thumbnail">
            <img src={short.thumbnail} alt={short.title} />
            <h2>{short.title}</h2>
          </div>
        ))
      )}
    </div>
  );
}


export default App;
