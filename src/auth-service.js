const login = (email, password) => {
    
          localStorage.setItem("user", 'access-token');

  };
  
  const logout = () => {
    localStorage.removeItem("user");
  };
  
  export default {
    login,
    logout,
  };