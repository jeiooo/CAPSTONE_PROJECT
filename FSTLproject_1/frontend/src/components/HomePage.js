import React, { Component } from "react";
import JoinRoomPage from "./JoinRoomPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom";


export default class Homepage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Routes>  {/* Use Routes instead of Switch */}
                    {/* Define routes using the 'element' prop */}
                    <Route path="/" element={<p>This is the Homepage.</p>} />  {/* Render static text */}
                    <Route path="/join" element={<JoinRoomPage />} />  {/* Use the 'element' prop to render JoinRoomPage */}
                    <Route path="/create" element={<CreateRoomPage />} />  {/* Use the 'element' prop to render CreateRoomPage */}
                </Routes>
            </Router>
        )
    }
}