export const SET_HIGH_SCORE = 'SET_HIGH_SCORE';

export const setHighScore = (score: number) => ({
  type: SET_HIGH_SCORE,
  payload: score,
});

export const SET_SCORE = 'SET_SCORE';

export const setScore = (score: number) => ({
  type: SET_SCORE,
  payload: score,
});
