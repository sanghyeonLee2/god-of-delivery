import React from 'react';

function Image({width, height, src}) {
    return (
        <img src={src} width={width} height={height} alt={src}/>
    );
}

export default Image;