const initialState = {
  isLoggedIn: false,
  loading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "IS_LOGGED_IN":
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case "START_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "STOP_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
