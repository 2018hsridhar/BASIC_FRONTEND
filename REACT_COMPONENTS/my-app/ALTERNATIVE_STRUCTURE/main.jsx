import logo from './logo.svg';
import './App.css';
import React from 'react';
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react';

function Greeting(props){
  return <h1>Hello, {props.name}!</h1>;
}

function Goodbye(props){
  return <h1>Goodbye, {props.name}!</h1>;
}

// `export default` can be a function, class, object, or primitive value
export { Greeting, Goodbye };

// Main function to demonstrate the Greeting component
function main() {
  const firstNames = ['Hari', 'Sophia', 'Jane', 'Julian', 'Angela'];
  for (const firstName of firstNames) {
    const greetingValue = <Greeting name={firstName} />;
    const goodbyeValue = <Goodbye name={firstName} />;
    console.log(greetingValue);
    console.log(goodbyeValue);
  }
}

main();

// // React is a JavaScript library for building user interfaces
// // Build user interface with React
// // Create functional components
// // JSX syntax
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function AppWrapper() {
//   return (
//     <div>
//       <Welcome name="Hari" />
//       <Welcome name="Aanth" />
//     </div>
//   );
// }

// // How about a bunch of shorts where someone can upload thumbnails
// // Of them teaching programming concepts or system design skills

// // Display : thumbnails, videos, and video descriptions.
// // function ShortsList({ shorts, emptyHeading }) {
// //   const numberOfShorts = shorts.length;
// //   let heading = emptyHeading;
// //   if(numberOfShorts > 0) {
// //     const shortsNoun = numberOfShorts === 1 ? 'short' : 'shorts';
// //     heading = `Showcasing ${numberOfShorts} ${shortsNoun}`;
// //   }
// //   return (
// //     <section>
// //       <div className="shorts-list">
// //         {numberOfShorts === 0 ? (
// //           <h2>{emptyHeading}</h2>
// //         ) : (
// //           shorts.map((short) => (
// //             <div key={short.id} className="video-thumbnail">
// //               <img src={short.thumbnail} alt={short.title} />
// //               <h2>{short.title}</h2>
// //             </div>
// //           ))
// //         )}
// //       </div>
// //     </section>
// //   );
// // }


// export default App;
