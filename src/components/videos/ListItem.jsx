import React,{useContext} from 'react'
import Moment from "react-moment"
import { videoContext } from '../../apis/VideoContext'

const ListItem = ({snippet,id}) => {
    console.log(id)
    let {handleClick}=useContext(videoContext)

    let {publishedAt ,title,thumbnails,channelTitle}=snippet;
  return (
    <div  className="thumbnails flex pl-3" onClick={()=>handleClick(id)}>
        <button ><figure className="basis-[40%] pl-2 pb-2">
            
            <img  className="w-44 h-28" src={thumbnails.medium.url} alt={title} />
        </figure>
 </button>
               <main className="basis-[60%] p-2">
            <h3 className="text font-semibold">{title.slice(0,20)+"......"}</h3>
            <h5 className="text-xs">{channelTitle}</h5>
          <Moment fromNow >{publishedAt}</Moment>
        </main>

    </div>
  )
}

export default ListItem