
  
  import AuthService from "../auth-service";


  const user = JSON.parse(localStorage.getItem("access-key"));
  
  const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isLoggedIn: true,
          user: true,
        };
      case 'LOGIN_FAIL':
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      case 'LOGOUT':
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      default:
        return state;
    }
  }
  

  export const login = (email, password) => (dispatch) => {
    AuthService.login()
    //   (data) => {
        dispatch({
          type: 'LOGIN_SUCCESS',
          //payload: { user: data },
        });
  
        //return Promise.resolve();
     // },
      // (error) => {
      //   const message =
      //     (error.response &&
      //       error.response.data &&
      //       error.response.data.message) ||
      //     error.message ||
      //     error.toString();
  
        dispatch({
          type: 'LOGIN_FAIL',
        });
  
        dispatch({
          type: 'SET_MESSAGE',
          //payload: message,
        });
  
        //return Promise.reject();
      }
  //   );
  // };
  
  export const logout = () => (dispatch) => {
    AuthService.logout();
  
    dispatch({
      type: 'LOGOUT',
    });
  };