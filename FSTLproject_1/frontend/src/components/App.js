import React, { Component } from "react";
import { createRoot } from "react-dom/client"; // Use createRoot for React 18+
import Homepage from "./HomePage";


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <Homepage />
          </div>
        );
      }
}

// Get the root element
const appDiv = document.getElementById("app");

// Create a root using React 18's createRoot
const root = createRoot(appDiv);

// Render the App component
root.render(<App />);
