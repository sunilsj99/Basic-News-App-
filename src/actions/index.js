import axios from "axios";

const API_KEY = "59416e04907c46578a63abedcbb98155";
const ROOT_URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;

export const GET_NEWS = "get-news";

export function getNews() {
  const request = axios.get(ROOT_URL);
  // console.log(request);
  return {
    type: GET_NEWS,
    payload: request
  };
}
