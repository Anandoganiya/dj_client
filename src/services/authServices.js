import axios from "axios";

const REGISTER_URL = "http://localhost:3005/api/user/register-user";
const PLUG_URL = "http://localhost:3005/api/user/set-user-plug";
const PROFILE_URL = "http://localhost:3005/api/user/set-user-profile";
const LOGIN_URL = "http://localhost:3005/api/user/login-user";

const register = async (userCredentials) => {
  const response = await axios.post(REGISTER_URL, userCredentials);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
const login = async (userCredentials) => {
  const response = await axios.post(LOGIN_URL, userCredentials);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const setPlug = async (userPlug, accessToken) => {
  const response = await axios.post(PLUG_URL, userPlug, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};

const setProfile = async (userProfile, accessToken) => {
  const response = await axios.post(PROFILE_URL, userProfile, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};

const authService = {
  register,
  setPlug,
  setProfile,
  login,
};

export default authService;
