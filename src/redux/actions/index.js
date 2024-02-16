export const FETCH_MUSIC_SUCCESS = "FETCH_MUSIC_SUCCESS";
export const FETCH_MUSIC_FAILURE = "FETCH_MUSIC_FAILURE";
export const TURN_ON_LOADING = "TURN_ON_LOADING";
export const TURN_OFF_LOADING = "TURN_OFF_LOADING";

export const fetchMusicAction = (query) => {
  return async (dispatch, getState) => {
    console.log(getState);
    dispatch({ type: TURN_ON_LOADING });
    const myUrl = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
    try {
      const response = await fetch(myUrl + query);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({
          type: FETCH_MUSIC_SUCCESS,
          payload: data.data,
        });
      } else {
        dispatch({
          type: FETCH_MUSIC_FAILURE,
          payload: "Error fetching music",
        });
      }
    } catch (error) {
      dispatch({
        type: FETCH_MUSIC_FAILURE,
        payload: error.message,
      });
    } finally {
      dispatch({ type: TURN_OFF_LOADING });
    }
  };
};
