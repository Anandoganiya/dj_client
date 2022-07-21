import axios from "axios";
const USER_URL = "http://localhost:3005/api/user/get-user";
const PROFIE_UPDATE_URL = "http://localhost:3005/api/user/update-profile";
const getUser = async (currentUser) => {
  const response = await axios.get(USER_URL, {
    headers: {
      Authorization: `Bearer ${currentUser.data.token}`,
    },
  });
  return response.data;
};
const upateProfile = async (userProfile, accessToken) => {
  const response = await axios.post(PROFIE_UPDATE_URL, userProfile, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

const userServices = {
  getUser,
  upateProfile,
};

export default userServices;
