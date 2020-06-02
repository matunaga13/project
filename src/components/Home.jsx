import React from 'react';
import { Redirect } from 'react-router-dom';

function Home() {
    if (true) {
        return <Redirect to="/about" />;
    }

    return (
        <h1>ホームページです</h1>
    );
}

export default Home;