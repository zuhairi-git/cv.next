import React from 'react';

export function CopyrightImageLong() {
    return (
        <div id='copyright-logn' className='imageCopyrightContainer'>
            <span className='imageCopyright'>Copyright of the image is retained by <a href='https://cvlanes.com'>cvlanes.com</a></span>
        </div>
    );
}

export function CopyrightImageShort() {
    return (
        <div id='copyright-short' className='imageCopyrightContainer'>
            <span className='imageCopyright'>Copyright retained by <a href='https://cvlanes.com'>cvlanes.com</a></span>
        </div>
    );
}
