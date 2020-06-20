import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Carousel from "./components/Carousel";
import CarouselCard from "./components/CarouselCard";

interface CarouselCardProps {
    color: string;
}

const cards:Array<React.ReactNode> = [
    <CarouselCard color='red'/>,
    <CarouselCard color='yellow'/>,
    <CarouselCard color='blue'/>,
    <CarouselCard color='purple'/>,
]

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Grid container item xs={12}>
              <Carousel children={cards}/>
          </Grid>
        </header>
      </div>
  );
}

export default App;
