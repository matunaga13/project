import React from 'react';
import {
    HashRouter as Router,
    Route,
    Link
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';

function App() {
    return (
        <Router>
            <ul>
                <li><Link to="/">ホーム</Link></li>
                <li><Link to="/about/">アバウト</Link></li>
            </ul>


            <Route path="/" exact component={Home} />
            <Route path="/about/" exact component={About} />
        </Router>
    );
}

export default App;