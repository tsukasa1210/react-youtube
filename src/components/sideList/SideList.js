import React, { useEffect, useContext } from 'react'
import { fetchRelatedData } from '../../apis/index'
import { Store } from '../../store/index'
import SideListItem from '../sideListItem/SideListItem'
import Style from './SideList.module.scss'

function SideList() {
    const { globalState, setGlobalState } = useContext(Store)
    const setRelatedVideo = async (id) => {
        await fetchRelatedData(id).then((res) => {
            setGlobalState({type: 'SET_RELATED', payload:{related: res.data.items}})
        })
    }

    useEffect(() => {
        setRelatedVideo(globalState.selected.id)
    }, [globalState.selected])

    return (
        <div className={Style.sidenav}>
            {
                globalState.related ? globalState.related.map((video) => {
                    return (
                        <SideListItem
                        id={video.id.videoId}
                        key={video.id.videoId}
                        src={video.snippet.thumbnails.medium.url}
                        title={video.snippet.title}
                        />
                    )
                }) : <span>no data</span>
            }

        </div>
    )
}

export default SideList
