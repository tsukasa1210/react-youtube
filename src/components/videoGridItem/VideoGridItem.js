import React from 'react'
import Style from './VideoGridItem.module.scss'
import { Link } from 'react-router-dom'

const VideoGridItem = ({id, src, title}) => {
    const params = '?v=' + id;
    return (
        <Link to={{pathname:'watch', search: params }} className={Style.item}>
            <div>
                <img src={src} alt={title}/>
                <span>{title}</span>
            </div>
        </Link>
    )
}

export default VideoGridItem
