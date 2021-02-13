const initialState = {
  characters: [],
  comments: [],
  isLoaded: false,
  currentPage: 1,
  totalСharactersCount: 0,
  
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHARACTERS':
      return {
        ...state,
        characters: action.payload,
      };
      case 'ADD_COMMENT':
      return {
        ...state,
        comments: [...state.comments, { newComment: action.payload.newComment, name:action.payload.name }]
      };
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };

    case 'SET_TOTAL_CHARACTERS_COUNT':
      return {
        ...state,
        totalCharactersCount: action.payload,
      };

      case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
};

export default users;
