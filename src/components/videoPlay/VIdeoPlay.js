import React from 'react'
import Youtube from 'react-youtube'
import Style from './VideoPlay.module.scss'

const VIdeoPlay = ({id}) => {
    return (
        <div className={Style.wrap}>
            <Youtube videoId={id} className={Style.video}/>
        </div>
    )
}

export default VIdeoPlay
