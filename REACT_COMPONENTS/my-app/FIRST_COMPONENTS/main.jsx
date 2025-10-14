import React from 'react';
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react';

function Greeting(props){
  return <h1>Hello, {props.name}!</h1>;
}

function Goodbye(props){
  return <h1>Goodbye, {props.name}!</h1>;
}

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
  // const vs let vs var
  // const : block-scoped, cannot be reassigned
  // let : block-scoped, can be reassigned
  // var : function-scoped, can be reassigned, hoisted
  const namesListHTML = (
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

// Add this Card component to your main.jsx file
function Card({ title, content, imageUrl, buttonText, onButtonClick }) {
  return (
    <div className="card">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="card-image" />
      )}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{content}</p>
        {buttonText && (
          <button className="card-button" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}

// Example usage function : create 3 cards with different content
// Let's make them about National Parks in CA
// Yosemite, Pinnacles, and Joshua Tree
// App Idea : National Parks - share quick photos and info about each park
function createCardsExample() {
  // Array of card data
  const cards = [
    {
      title: "Yosemite National Park",
      content: "Explore the stunning landscapes and giant sequoias.",
      buttonText: "Learn More",
      onButtonClick: () => alert("Opening Yosemite guide!")
    },
    {
      title: "Pinnacles National Park",
      content: "Discover unique rock formations and diverse wildlife.",
      buttonText: "Get Started",
      onButtonClick: () => alert("Opening Pinnacles Guide!")
    },
    {
      title: "Joshua Tree National Park",
      content: "Experience the unique desert landscapes and iconic Joshua trees.",
      buttonText: "Learn More",
      onButtonClick: () => alert("Opening Joshua Tree guide!")
    },
  ];

  const cardsHTML = (
    // Container for the cards
    // Why grid layout? : allows for responsive design and easy alignment of items
    <div className="cards-container">
      <h2>Learning Resources</h2>
      <div className="cards-grid">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={card.content}
            buttonText={card.buttonText}
            onButtonClick={card.onButtonClick}
          />
        ))}
      </div>
    </div>
  );
  return cardsHTML;
}

// Here, we're exporting multiple named exports
// `export default` can be a function, class, object, or primitive value
export { Greeting, Goodbye, createFullNamesList, createCardsExample };

function main() {
  const namesListHTML = createFullNamesList();
  const cardsHTML = createCardsExample();
  // Combine both sections into a single JSX element
  const combinedHTML = (
    <div>
      <h1>California National Parks Card Data</h1>
      {namesListHTML}
      {cardsHTML}
    </div>
  );
  return combinedHTML;
}

// Use createRoot to render the components into the DOM
// Assuming there's a div with id 'root' in your HTML
// StrictMode is a tool for highlighting potential problems in an application
// It activates additional checks and warnings for its descendants
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
