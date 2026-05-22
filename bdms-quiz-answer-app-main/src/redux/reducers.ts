import {SET_SCORE, SET_HIGH_SCORE} from './actions';

interface AppState {
  highScore: number;
  score: number;
}

const initialState: AppState = {
  highScore: 0,
  score: 0,
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    case SET_HIGH_SCORE:
      return {
        ...state,
        highScore: Math.max(action.payload, state.highScore),
      };
    default:
      return state;
  }
};

export default rootReducer;
