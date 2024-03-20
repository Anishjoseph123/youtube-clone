import axios from "axios"

const KEY="xxxxxxxxxxxxxxxxx"; 

export let baseParams={
    key:KEY,
    maxResults:10,
    part:"snippet",
}

export default axios.create({
    baseURL:"xxxxxxxxxxxxxxxxxxxxxxxxx"
})
