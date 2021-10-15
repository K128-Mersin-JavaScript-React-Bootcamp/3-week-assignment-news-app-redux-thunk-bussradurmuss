const INITIAL_STATE = {
  news: [],
  message: "",
};
export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_NEWS_SUCCESS":
      return { ...state, news: action.payload };
    case "GET_NEWS_ERROR":
      return { ...state, message: action.payload };
  }
  return state;
};