import React from 'react';

const GalleryImg = ({toy}) => {
    return (
        <>
            <img className="w-80 h-60 rounded" src={toy.img} alt="" />

        </>
    );
};

export default GalleryImg;