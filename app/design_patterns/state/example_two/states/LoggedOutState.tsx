import { AuthState } from "../authStateType";

export const LoggedOut: AuthState = {
 label: "Logged Out",
 ui: <p>You are logged out.</p>,
 login() {
  return "LOGGING_IN";
 },
};
