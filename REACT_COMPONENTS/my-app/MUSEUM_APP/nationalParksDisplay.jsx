import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Gallery from './gallery.jsx';
import Exhibit from './exhibit.jsx';


// Data for national parks
const nationalParksData = {
  imageUrls: [
    "https://www.nps.gov/common/uploads/structured_data/3C7B45AE-1DD8-B71B-0B7EE131C7DFC2F5.jpg",
    "https://www.nps.gov/common/uploads/structured_data/3C84C3C0-1DD8-B71B-0BFF4F2280A0C0C4.jpg",
    "https://www.nps.gov/common/uploads/structured_data/3C7A4F8E-1DD8-B71B-0B13DCDA2ED826AB.jpg",
    "https://www.nps.gov/common/uploads/structured_data/3C87A971-1DD8-B71B-0BCB48E009241BAA.jpg",
    "https://www.nps.gov/common/uploads/structured_data/3C84EF84-1DD8-B71B-0B2F33D3B4F6D4D8.jpg",
    "https://www.nps.gov/common/uploads/structured_data/3C7ECB2C-1DD8-B71B-0B9C7FF83F7E4472.jpg",
    "https://www.nps.gov/common/uploads/structured_data/3C80B539-1DD8-B71B-0BBBDD2F9CAD1A8B.jpg",
    "https://www.nps.gov/common/uploads/structured_data/3C8717B4-1DD8-B71B-0BF4F2280A0C0C4A.jpg",
    "https://www.nps.gov/common/uploads/structured_data/3C790EBD-1DD8-B71B-0B4BCBEB3F7C2FA1.jpg",
    "https://www.nps.gov/common/uploads/structured_data/3C7B227E-1DD8-B71B-0B51E61B5D4396D5.jpg"
  ],
  
  imageTitles: [
    "Grand Canyon National Park - Arizona",
    "Yellowstone National Park - Wyoming",
    "Yosemite National Park - California", 
    "Zion National Park - Utah",
    "Glacier National Park - Montana",
    "Great Smoky Mountains National Park - Tennessee",
    "Arches National Park - Utah",
    "Rocky Mountain National Park - Colorado",
    "Acadia National Park - Maine",
    "Joshua Tree National Park - California"
  ]
};

// Usage in your Gallery component:
function Application() {
  return (
    <Gallery 
      imageUrls={nationalParksData.imageUrls}
      imageTitles={nationalParksData.imageTitles}
    />
  );
}

function Main() {
  return <Application />; // Add 'return' and JSX syntax
}


// Use createRoot to render the components into the DOM
// Assuming there's a div with id 'root' in your HTML
// StrictMode is a tool for highlighting potential problems in an application
// It activates additional checks and warnings for its descendants
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />  {/* Use component syntax instead of {main()} */}
  </StrictMode>
);

