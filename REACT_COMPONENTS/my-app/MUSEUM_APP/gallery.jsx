// What is JSX? It's a syntax extension for JavaScript that looks similar to XML or HTML
// JSX allows us to write HTML-like code within JavaScript, making it easier to create and visualize UI components
// React components can be defined as functions that return JSX

// Importing the Profile component from a local file
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Exhibit from './exhibit.jsx';

// Gallery component that uses the Profile component multiple times
// It's a good practice to have one component per file for better maintainability
// This keeps the code organized and makes it easier to manage and update individual components
// Each component can be reused in different parts of the application

export default function Gallery({ imageUrls, imageTitles }) {
    return (
        <section>
            <h2>Gallery Management Component</h2>
            {imageUrls.map((url, index) => {
                const imageTitle = imageTitles[index];
                return (
                    <Section key={url}>
                        <h1>{imageTitle}</h1>
                        <Exhibit targetImageUrl={url} />
                    </Section>
                );
            })}
        </section>
    );
}