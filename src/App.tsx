import React from 'react';
import './App.css';
import Carousel from "./components/Carousel";
import CarouselCard from "./components/CarouselCard";

const cards: Array<React.ReactNode> = [
    <CarouselCard color='red' key='red'/>,
    <CarouselCard color='yellow' key='yellow'/>,
    <CarouselCard color='blue' key='blue'/>,
    <CarouselCard color='purple' key='purple'/>,
]

function App() {
    return (
        <div className="App">
            <div className="App-body">
            <Carousel children={cards}/>
            </div>
        </div>
    );
}

export default App;
