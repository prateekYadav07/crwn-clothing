import { UserActionTypes } from "./user.types";

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (user) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: user
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (message) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: message,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
})
