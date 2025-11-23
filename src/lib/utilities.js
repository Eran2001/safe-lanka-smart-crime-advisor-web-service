const getAuthToken = () => {
  return localStorage.getItem("session.token");
};

const setAuthToken = (authToken) => {
  localStorage.setItem("session.token", authToken);
};

const getUserData = () => {
  const userData = localStorage.getItem("session.user");
  return userData ? JSON.parse(userData) : null;
};

const setUserData = (userData) => {
  localStorage.setItem("session.user", JSON.stringify(userData));
};

const token = {
  getAuthToken,
  setAuthToken,
  getUserData,
  setUserData,
};

export default token;
