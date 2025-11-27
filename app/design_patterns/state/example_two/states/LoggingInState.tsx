import { AuthState } from "../authStateType";

export const LoggingIn: AuthState = {
 label: "Logging In...",
 ui: <p>Logging in, please wait...</p>,
 // after login finishes → loggedIn
 login() {
  return "LOGGED_IN";
 },
};
