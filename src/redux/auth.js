import { INIT_USERDATA, LOGIN_FINISH, LOGOUT_FINISH } from "./types";

const initialState = {
  username: null,
  password: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FINISH: {
      return {
        ...state,
        ...action.payload
      };
    }
    case LOGOUT_FINISH: {
      return {
        ...state,
        username: null,
        password: null,
      };
    }
    case INIT_USERDATA: {
      const { username, password } = action.payload;
      return {
        ...state,
        username,
        password,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer
