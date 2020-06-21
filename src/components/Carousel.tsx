import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import anime from 'animejs/lib/anime.es.js';
import SlideIndex from './SlideIndex'

interface CarouselProps {
    children: Array<React.ReactNode>;
}

export default function Carousel({children}: CarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {fadeIn()})

    const subArray = children.slice(activeIndex, activeIndex + 1);

    const fadeIn = () => {
        anime({
            targets: '.anim',
            duration: 1000,
            opacity: 1,
            translateY: 0,
            easing: 'linear'
        });
    }
    const fadeOut = () => {
        anime({
            targets: '.anim',
            duration: 1000,
            opacity: 0,
            translateY: 0,
            easing: 'linear'
        });
    }
    const goBackward = () => {

        if (activeIndex !== 0) {
            fadeOut()
            setTimeout(function(){
                setActiveIndex(activeIndex - 1)
                fadeIn()
            }, 1000);

        }
        return subArray
    }

    const goForward = () => {
        if (activeIndex !== children.length - 1) {
            fadeOut()
            setTimeout(function(){
                setActiveIndex(activeIndex + 1)
                fadeIn()
            }, 1000);
        }
        return subArray
    }

    return (
        <Grid container style={{justifyContent: 'center', alignContent:'space-around'}}>
            <Grid item xs={1} style={{padding:'10px'}}>
                <Button variant="contained" onClick={() => goBackward()}>Backward</Button>
            </Grid>
            <Grid container item xs={10} style={{justifyContent: 'space-around', padding:'10px'}} spacing={2}>
                {subArray}
            </Grid>
            <Grid item xs={1} style={{padding:'10px'}}>
                <Button variant="contained" onClick={() => goForward()}>Forward</Button>
            </Grid>
            <Grid item xs={12}  style={{padding:'10px'}}    >
                <SlideIndex currentIndex={activeIndex} totalNumSlides={children.length}/>
            </Grid>
        </Grid>
    )
}