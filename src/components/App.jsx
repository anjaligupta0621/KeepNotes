import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';

function App(props) {
    return (
        <div>
            <Header />
            <Note />
            <Footer />
        </div>
    );
}

export default App;