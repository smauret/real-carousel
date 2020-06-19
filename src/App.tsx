import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Carousel from "./components/Carousel";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Grid container item xs={12}>
              <Carousel children={['red','yellow','blue','purple']}/>
          </Grid>
        </header>
      </div>
  );
}

export default App;
