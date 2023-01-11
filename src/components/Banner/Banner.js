import React from 'react';
import  './Banner.css';

const Banner = () => (
    <div className="layout_banner">
        <img src='/background.png' alt=''></img>
        <div className='banner_container'>
            <div className='banner_title'>
                Peaky Blinders
            </div>
            <div className='banner_intro'>
                Tommy Shelby, a dangerous man, leads the Peaky Blinders, 
                a gang based in Birmingham. Soon, Chester Campbell, an inspector, 
                decides to nab him and put an end to the criminal activities.
            </div>
            <div className='rating'>
                <img src='/IMDB.png' alt=''></img>
                8.8/10
            </div>
            <div className='stream'>
                <span>2B+</span>Streams
            </div>

            <div className='buttons'>
                <button className='button_play'>Play</button>
                <button className='button_trailer'>Watch Trailer</button>
            </div>
        </div>
    </div>
);

export default Banner;