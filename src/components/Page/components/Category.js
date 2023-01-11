import React from "react";
import './Category.css';

const Category = ({src, title}) => (
    <div className="layout_category">
        <img src={src} alt=''></img>
        <div className="category_title">{title}</div>
    </div>
);

export default Category;