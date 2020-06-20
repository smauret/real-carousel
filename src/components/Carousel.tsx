import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

interface CarouselProps {
    children: Array<React.ReactNode>;
}

export default function Carousel({children}: CarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const subArray = children.slice(activeIndex, activeIndex + 1);

    console.log('activeIndex', activeIndex)
    const goBackward = () => {
        if (activeIndex !== 0) {
            setActiveIndex(activeIndex - 1)
        }
    }

    const goForward = () => {
        if (activeIndex !== children.length - 1) {
            setActiveIndex(activeIndex + 1)
        }
    }

    return (
        <Grid container>
            <Grid item xs={1}>
                <Button variant="contained" onClick={() => goBackward()}>Backward</Button>
            </Grid>
            <Grid container item xs={10} style={{justifyContent: 'space-around'}} spacing={2}>
                {subArray}
            </Grid>
            <Grid item xs={1}>
                <Button variant="contained" onClick={() => goForward()}>Forward</Button>
            </Grid>
            <Typography>Slide: {activeIndex}</Typography>
        </Grid>
    )
}