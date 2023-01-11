import React from "react";
import './Card.css';

const Card = ({open, item, onClose}) => {
    if(!open) {
        return null;
    } 
    else {
        return (
            <div className="layout_card" onMouseLeave={onClose}>
                <img src={item.src_lg} alt=''></img>
                <div className="card_container">
                    <div className="card_title">{item.title}</div>
                    <div className="card_intro">{item.intro}</div>
                    <div className="card_info">
                        <div className="card_rating"><img src="/IMDB.png" alt=''></img>{item.rating}/10</div>
                        <a href=''>Read More</a>
                    </div>
                    <div className="buttons">
                        <button className="button_play">Play Now</button>
                        <button className="button_trailer">Watch Trailer</button>
                        <button><img src="akar-icons_heart.svg" alt=""></img></button>
                    </div>
                </div>
            </div>);
    }
};

export default Card;