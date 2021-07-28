const isAuth = () => {
  const userData = localStorage.getItem("auth");
const isLoggedIn = userData === null ? false : true;
return isLoggedIn
}
const checkAuth = isAuth()
export default checkAuth