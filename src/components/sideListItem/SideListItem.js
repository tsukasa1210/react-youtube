import React from 'react'
import { Link } from 'react-router-dom'
import Style from './SideListItem.module.scss'

const SideListItem = ({id, src, title}) => {
    const params = '?v=' + id;
    return (
        <Link className={Style.item} to={{pathname: 'watch', search:params}}>
            <img src={src} alt={title} />
            <div className={Style.info}>
                <span>{title}</span>
            </div>
        </Link> 
    )
}

export default SideListItem
