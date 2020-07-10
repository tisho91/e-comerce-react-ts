import React from "react";
import { withRouter, RouteComponentProps} from 'react-router-dom'
import './menu-item.styles.scss'
import {IMenuItem} from "@interfaces";

export interface MenuItemProps extends IMenuItem, RouteComponentProps{

}


const MenuItem: React.FC<MenuItemProps>  = ({title,imageUrl,linkUrl,id, size, history,match}: MenuItemProps ) => (
    <div style={{
            backgroundImage: `url(${imageUrl})`
        }}
        className={`menu-item ${size}`}
    >
        <div className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
             onClick={()=>history.push(`${match.url}${linkUrl}`)}
        ></div>
        <div className='content'>
            <div className='title'>{title.toUpperCase() }</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>

)

export default withRouter(MenuItem);
