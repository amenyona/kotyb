import React from "react";
import { Footer, Blog, Features, Header, Possibility, WhatGPT3 } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';
import './index.css';
import ImagesSlider from "./components/slide/ImagesSlider";

const App = () => {
    const hrefe = window.location.href;
    const slides = [
        { url: hrefe+"/kotyb1.jpeg" },
        { url: hrefe+"/kotyb2.jpeg"},
        { url: hrefe+"/kotyb3.jpeg"},
        { url: hrefe+"/kotyb4.jpeg"},
        { url: hrefe+"/kotyb5.jpeg"},
        { url: hrefe+"/kotyb6.jpeg"},
        { url: hrefe+"/kotyb7.jpeg"},
        { url: hrefe+"/kotyb8.jpeg" },
        { url: hrefe+"/kotyb9.jpeg"},
        { url: hrefe+"/kotyb10.jpeg"},
        { url: hrefe+"/kotyb11.jpeg"},
        { url: hrefe+"/kotyb12.jpeg"},
        { url: hrefe+"/kotyb13.jpeg"},
        { url: hrefe+"/kotyb14.jpeg"},
        { url: hrefe+"/kotyb15.jpeg" },
        { url: hrefe+"/kotyb16.jpeg"},
        { url: hrefe+"/kotyb17.jpeg"},
        { url: hrefe+"/kotyb18.jpeg"},
        { url: hrefe+"/kotyb19.jpeg"},
        { url: hrefe+"/kotyb20.jpeg"},
        { url: hrefe+"/kotyb21.jpeg"},
        { url: hrefe+"/kotyb22.jpeg" },
        { url: hrefe+"/kotyb23.jpeg"},
        { url: hrefe+"/kotyb24.jpeg"},
        { url: hrefe+"/kotyb25.jpeg"},
        { url: hrefe+"/kotyb26.jpeg"},
        { url: hrefe+"/kotyb27.jpeg"},
        { url: hrefe+"/kotyb28.jpeg"},
        { url: hrefe+"/kotyb29.jpeg" },
        { url: hrefe+"/kotyb30.jpeg"},
        { url: hrefe+"/kotyb31.jpeg"},
        { url: hrefe+"/kotyb32.jpeg"},
        { url: hrefe+"/kotyb33.jpeg"},
        { url: hrefe+"/kotyb34.jpeg"},
        { url: hrefe+"/kotyb35.jpeg"},
        { url: hrefe+"/kotyb36.jpeg" },
        { url: hrefe+"/kotyb38.jpeg"},
        { url: hrefe+"/kotyb39.jpeg"},
        { url: hrefe+"/kotyb40.jpeg"},
        { url: hrefe+"/kotyb41.jpeg"},
        { url: hrefe+"/kotyb42.jpeg"},
        { url: hrefe+"/kotyb43.jpeg"},
        { url: hrefe+"/kotyb44.jpeg" },
        { url: hrefe+"/kotyb45.jpeg"},
        { url: hrefe+"/kotyb46.jpeg"},
        { url: hrefe+"/kotyb47.jpeg"},
        { url: hrefe+"/kotyb48.jpeg"},
        { url: hrefe+"/kotyb49.jpeg"},
        { url: hrefe+"/kotyb50.jpeg"},
        { url: hrefe+"/kotyb51.jpeg" },
        { url: hrefe+"/kotyb52.jpeg"},
        { url: hrefe+"/kotyb53.jpeg"},
        { url: hrefe+"/koty54.jpeg"},
       

    ];
    const containerStyles = {
        /*width:'700px',
        height: '500px',
        margin:'0 auto'*/
    };
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <div style={containerStyles} className="container-styles">
                <ImagesSlider slides={slides} />
            </div>
            <Blog />

            <Footer />

        </div>
    )
}

export default App;