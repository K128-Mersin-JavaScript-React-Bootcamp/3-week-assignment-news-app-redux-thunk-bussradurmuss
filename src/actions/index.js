import axios from "axios";
const language = "tr";
const API_KEY = "58b6067f68b545c6a8b249f89176bf4e";

export const getNews = (category) => (dispatch) => {
  const query = category;
  axios
    .get(
      `https://newsapi.org/v2/everything?language=${language}&q=${query}&apiKey=${API_KEY}`
    )
    .then((response) =>
      dispatch({ type: "GET_NEWS_SUCCESS", payload: response.data })
    )
    .catch((error) => dispatch({ type: "GET_NEWS_ERROR", payload: error }));
};