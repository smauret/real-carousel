import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import CarouselCard from "./CarouselCard";
import Button from "@material-ui/core/Button";

export default function Carousel ({children}){
    const [activeIndex, setActiveIndex] = useState(0);
    console.log('activeIndex', activeIndex)
    const goBackward = () => {
        if (activeIndex != 0){
            setActiveIndex(activeIndex-1)
        }
    }

    const goForward = () => {
        if (activeIndex != children.length-1){
            setActiveIndex(activeIndex+1)
        }
    }

    return (
        <Grid container >
        <Grid item xs={1}>
            <Button variant="contained" onClick={()=> goBackward()}>Backward</Button>
        </Grid>
        <Grid container item xs={10} style={{justifyContent: 'space-around'}} spacing={2}>
            {children.slice(activeIndex, activeIndex+2).map((color) =>
                <Grid item key={color} xs={3}>
                    <CarouselCard color={color}/>
                </Grid>
            )}
        </Grid>
    <Grid item xs={1}>
        <Button variant="contained" onClick={()=> goForward()}>Forward</Button>
    </Grid>
        </Grid>
    )
}