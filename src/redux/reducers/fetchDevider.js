import { SONGS_A, SONGS_B, SONGS_C } from "../actions";

const initialState = {
  songA: [],
  songB: [],
  songC: [],
};

const fetch = (state = initialState, action) => {
  switch (action.type) {
    case SONGS_A: {
      return {
        ...state,
        songA: action.payload,
      };
    }
    case SONGS_B: {
      return {
        ...state,
        songB: action.payload,
      };
    }
    case SONGS_C: {
      return {
        ...state,
        songC: action.payload,
      };
    }

    default:
      return state;
  }
};

export default fetch;
