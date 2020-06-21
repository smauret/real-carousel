import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

interface CarouselCardProps {
    color: string;
}

const images = {
    'blue': 'https://images.unsplash.com/photo-1515266591878-f93e32bc5937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'red': 'https://images.unsplash.com/photo-1507471509451-1d04d60f896d?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
    'yellow':'https://images.unsplash.com/photo-1508808787069-421e7986016e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    'purple':'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1087&q=80'
}


const CarouselCard: React.FC<CarouselCardProps> = ({color}) => {

    return (
        <Card className="anim" style={{backgroundColor: color, minWidth: 275, opacity:0}}>
            <CardMedia
                style={{height:'100%', width:'100%'}}
                image={images[color]}
                title="Paella dish"
            />
        </Card>
    );
}

export default CarouselCard;