import axios from "axios"

const KEY="AIzaSyBd4JYdoP4I6AmI-bgAEOJ8_lMYqoFw4HI"; 

export let baseParams={
    key:KEY,
    maxResults:10,
    part:"snippet",
}

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3"
})