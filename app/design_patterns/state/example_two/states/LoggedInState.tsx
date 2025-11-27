import { AuthState } from "../authStateType";

export const LoggedIn: AuthState = {
 label: "Logged In",
 ui: <p>Welcome, you are logged in.</p>,
 logout() {
  return "LOGGED_OUT";
 },
};
