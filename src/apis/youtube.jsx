import axios from "axios";

const KEY = "AIzaSyAfR2EFLpzN4nBFsUpM9nWBCS8S3GHZ72U";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
