import React from 'react';
import Card from '@material-ui/core/Card';

interface CarouselCardProps {
    color: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({color}) => {

    return (
        <Card className="anim" style={{backgroundColor: color, minWidth: 275, opacity:0}}/>
    );
}

export default CarouselCard;