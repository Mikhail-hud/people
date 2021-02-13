import { peopleApi } from '../../api/api';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchCharacters = (currentPage) => {
  return async (dispatch) => {
    dispatch(setLoaded(false));
    let data = await peopleApi.getCharacters(currentPage);
    dispatch(setCharacters(data.results));
    dispatch(setTotalCharactersCount(data.count));
    dispatch(setLoaded(true));
  };
};

export const setTotalCharactersCount = (charactersCount) => ({
  type: 'SET_TOTAL_CHARACTERS_COUNT',
  payload: charactersCount,
});

export const setCurrentPage = (currentPage) => ({
  type: 'SET_CURRENT_PAGE',
  payload: currentPage,
});

export const setCharacters = (characters) => ({
  type: 'SET_CHARACTERS',
  payload: characters,
});
export const addComment = (newComment) => ({
  type: 'ADD_COMMENT',
  payload: newComment
});
