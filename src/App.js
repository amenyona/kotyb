import React from "react";
import { Footer, Blog, Features, Header, Possibility, WhatGPT3 } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';
import './index.css';
import ImagesSlider from "./components/slide/ImagesSlider";

const App = () => {
    const slides = [
        { url: "http://localhost:3000/kotyb1.jpeg" },
        { url: "http://localhost:3000/kotyb2.jpeg"},
        { url: "http://localhost:3000/kotyb3.jpeg"},
        { url: "http://localhost:3000/kotyb4.jpeg"},
        { url: "http://localhost:3000/kotyb5.jpeg"},
        { url: "http://localhost:3000/kotyb6.jpeg"},
        { url: "http://localhost:3000/kotyb7.jpeg"},
        { url: "http://localhost:3000/kotyb8.jpeg" },
        { url: "http://localhost:3000/kotyb9.jpeg"},
        { url: "http://localhost:3000/kotyb10.jpeg"},
        { url: "http://localhost:3000/kotyb11.jpeg"},
        { url: "http://localhost:3000/kotyb12.jpeg"},
        { url: "http://localhost:3000/kotyb13.jpeg"},
        { url: "http://localhost:3000/kotyb14.jpeg"},
        { url: "http://localhost:3000/kotyb15.jpeg" },
        { url: "http://localhost:3000/kotyb16.jpeg"},
        { url: "http://localhost:3000/kotyb17.jpeg"},
        { url: "http://localhost:3000/kotyb18.jpeg"},
        { url: "http://localhost:3000/kotyb19.jpeg"},
        { url: "http://localhost:3000/kotyb20.jpeg"},
        { url: "http://localhost:3000/kotyb21.jpeg"},
        { url: "http://localhost:3000/kotyb22.jpeg" },
        { url: "http://localhost:3000/kotyb23.jpeg"},
        { url: "http://localhost:3000/kotyb24.jpeg"},
        { url: "http://localhost:3000/kotyb25.jpeg"},
        { url: "http://localhost:3000/kotyb26.jpeg"},
        { url: "http://localhost:3000/kotyb27.jpeg"},
        { url: "http://localhost:3000/kotyb28.jpeg"},
        { url: "http://localhost:3000/kotyb29.jpeg" },
        { url: "http://localhost:3000/kotyb30.jpeg"},
        { url: "http://localhost:3000/kotyb31.jpeg"},
        { url: "http://localhost:3000/kotyb32.jpeg"},
        { url: "http://localhost:3000/kotyb33.jpeg"},
        { url: "http://localhost:3000/kotyb34.jpeg"},
        { url: "http://localhost:3000/kotyb35.jpeg"},
        { url: "http://localhost:3000/kotyb36.jpeg" },
        { url: "http://localhost:3000/kotyb38.jpeg"},
        { url: "http://localhost:3000/kotyb39.jpeg"},
        { url: "http://localhost:3000/kotyb40.jpeg"},
        { url: "http://localhost:3000/kotyb41.jpeg"},
        { url: "http://localhost:3000/kotyb42.jpeg"},
        { url: "http://localhost:3000/kotyb43.jpeg"},
        { url: "http://localhost:3000/kotyb44.jpeg" },
        { url: "http://localhost:3000/kotyb45.jpeg"},
        { url: "http://localhost:3000/kotyb46.jpeg"},
        { url: "http://localhost:3000/kotyb47.jpeg"},
        { url: "http://localhost:3000/kotyb48.jpeg"},
        { url: "http://localhost:3000/kotyb49.jpeg"},
        { url: "http://localhost:3000/kotyb50.jpeg"},
        { url: "http://localhost:3000/kotyb51.jpeg" },
        { url: "http://localhost:3000/kotyb52.jpeg"},
        { url: "http://localhost:3000/kotyb53.jpeg"},
        { url: "http://localhost:3000/koty54.jpeg"},

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