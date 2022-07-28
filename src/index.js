// Import React and React-DOM libraries
import React from 'react';
import ReactDOM  from 'react-dom/client';

// Get a reference to div with id = 'root'
const el = document.getElementById('root');

// Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// Create a component
function App() {
    const inputType = 'number';
    const minValue = 5;
    return <input type={inputType} min={minValue} style={{ border: '3px solid red' }}/>;
}

// Show the component on screen
root.render(<App />);

