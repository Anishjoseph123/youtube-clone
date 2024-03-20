import React,{useContext} from 'react'
import ListItem from './ListItem';
import { videoContext } from './../../apis/VideoContext';

const ListVideos = () => {
    let {videos}=useContext(videoContext)
     console.log(videos); 
  return (
    <div>
        {
            videos===null
            ?"loading"
            :videos.items.map(item=>{
                return <ListItem key={item.id.videoId} {...item} id={item} />
            })
        }
    </div>
  )
}

export default ListVideos