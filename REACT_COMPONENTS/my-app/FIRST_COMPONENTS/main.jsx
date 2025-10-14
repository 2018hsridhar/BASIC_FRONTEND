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

function createFullNamesList() {
  const firstNames = ['Hari', 'Sophia', 'Jane', 'Julian', 'Angela'];
  const lastNames = ['Sridhar', 'Smith', 'Doe', 'Brown', 'Johnson'];
  const numberOfNames = firstNames.length;
  if(numberOfNames !== lastNames.length) {
    console.error('First names and last names arrays must have the same length.');
    return;
  }
  if(numberOfNames == 0) {
    console.log('No names to display.');
    return;
  }
  console.log(`Number of names: ${numberOfNames}`);
  namesListHTML = (
    <ol>
      {
        firstNames.map((firstName, index) => {
          // li key attr = unique identifier for each list item
          let lastName = lastNames[index];
          let uniqueIdentifier = `${firstName}-${lastName}-${index}`;
          let fullName = `${firstName} ${lastName}`;
          return (
            <li key={uniqueIdentifier}>
              <Greeting name={fullName} />
              <Goodbye name={fullName} />
            </li>
          );
        })
      }
    </ol>
  );
  return namesListHTML;
}


function main() {
  const targetHTML = createFullNamesList();
  return targetHTML;
}

// Use createRoot to render the components into the DOM
// Assuming there's a div with id 'root' in your HTML
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {main()}
  </StrictMode>
);

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
