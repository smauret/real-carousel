import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

interface CarouselCardProps {
    color: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({color}) => {

    return (
        <Card style={{backgroundColor: color, minWidth: 275}}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CarouselCard;