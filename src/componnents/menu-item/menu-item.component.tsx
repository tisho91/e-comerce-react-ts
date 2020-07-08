import React from "react";

import './menu-item.styles.scss'
import {IMenuItem} from "../../interfaces/menu-item.interfase";



const MenuItem = ({title,imageUrl,linkUrl,id, size}: IMenuItem) => (
    <div style={{
            backgroundImage: `url(${imageUrl})`
        }}
        className={`menu-item ${size}`}
    >
        <div className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        ></div>
        <div className='content'>
            <div className='title'>{title.toUpperCase() }</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>

)

export default MenuItem;
