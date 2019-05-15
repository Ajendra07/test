import React from 'react';
import { BrowseRouter, Route } from 'react-router-dom' ;
import Header from './Header' ;
import Bg from './Parallax' ;
import Features from './Features' ;
import Landing from './Landing' ;
import Recc from './Recc' ;
import Footer from './Footer' ;
import Student from './Student' ;

const App = () => {
    return (
        <div>
            <Header />
            <Bg />
            <h2 align="center"><b>Features</b></h2>
            <Features />
            <h2 align="center"><b>Courses</b></h2>
            <Landing />
            <Recc />
            <Footer />
        </div>
    ) ;
} ;

export default App;
