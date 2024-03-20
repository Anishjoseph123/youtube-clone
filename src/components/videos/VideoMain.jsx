import React from 'react'
import ListVideos from './ListVideos'
import Player from './Player'

const Videomain = () => {
  return (
    <section className="w-[100%] bg-gray-100">
      <article className="w-[95%] m-auto flex">
        <div className="basis-[70%]">
          <Player/>
        </div>

        <div className="basis-[30%]">
          <ListVideos/>
        </div>
      </article>
    </section>
  )
}

export default Videomain