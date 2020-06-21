import React from 'react';

interface SlideIndexProps {
    currentIndex: number;
    totalNumSlides: number
}

const SlideIndex = ({currentIndex, totalNumSlides }:SlideIndexProps): JSX.Element=> {
    let arr:JSX.Element[] = []
    for (let i = 0; i < totalNumSlides; i++) {
        if(i===currentIndex){
            arr.push(<span key={i} style={{color:'white'}} >•</span>)
        }else{
            arr.push(<span key={i} style={{color:'grey'}} >•</span>)
        }
    }
    return (<div>{arr}</div>)
}

export default SlideIndex