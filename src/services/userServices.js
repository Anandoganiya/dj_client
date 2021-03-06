import axios from "axios";
import {
  USER_URL,
  PROFIE_UPDATE_URL,
  PENDING_BOOKING_REQUEST_URL,
  ACCEPTED_BOOKING_REQUEST_URL,
  CREATE_DJ_URL,
} from "../constant/constants";

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

const getPendingRequest = async (accessToken) => {
  const response = await axios.get(PENDING_BOOKING_REQUEST_URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

const getAcceptedRequest = async (accessToken) => {
  const response = await axios.get(ACCEPTED_BOOKING_REQUEST_URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

const createDj = async (djProfile, accessToken) => {
  console.log(djProfile);
  const response = await axios.post(CREATE_DJ_URL, djProfile, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

const userServices = {
  getUser,
  upateProfile,
  getPendingRequest,
  getAcceptedRequest,
  createDj,
};

export default userServices;
