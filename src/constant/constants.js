const BASE_URL = "http://localhost:3005";

//auth constants
export const REGISTER_URL = `${BASE_URL}/api/user/register-user`;
export const LOGIN_URL = `${BASE_URL}/api/user/login-user`;
export const PLUG_URL = `${BASE_URL}/api/user/set-user-plug`;
export const PROFILE_URL = `${BASE_URL}/api/user/set-user-profile`;

//Current user constants
export const USER_URL = `${BASE_URL}/api/user/get-user`;
export const PROFIE_UPDATE_URL = `${BASE_URL}/api/user/update-profile`;
export const PENDING_BOOKING_REQUEST_URL = `${BASE_URL}/api/booking/pending-decline-booking`;
export const ACCEPTED_BOOKING_REQUEST_URL = `${BASE_URL}/api/booking/accept-booking`;
export const CREATE_DJ_URL = `${BASE_URL}/api/djOfWeek/create-dj-of-week`;
