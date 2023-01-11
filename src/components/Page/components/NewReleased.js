import React, {useState} from "react";
import './NewReleased.css'
import Card from "./Card";

const NewReleased = ({item}) => {
    const [openCard, setOpenCard] = useState(false);

    return (
        <div className="layout_newReleased">
            <img src={item.src} alt='' onMouseOver={() => setOpenCard(true)}></img>
            <Card open={openCard} item={item} onClose={()=> setOpenCard(false)} />
            <div className="newReleased_title">{item.title}</div>
        </div>
    )
}

export default NewReleased;