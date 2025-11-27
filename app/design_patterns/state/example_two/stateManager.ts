import { AuthState, AuthStatus } from "./authStateType";
import { LoggedIn } from "./states/LoggedInState";
import { LoggedOut } from "./states/LoggedOutState";
import { LoggingIn } from "./states/LoggingInState";

export const stateMapping: Record<AuthStatus, AuthState> = {
 LOGGED_IN: LoggedIn,

 LOGGED_OUT: LoggedOut,

 LOGGING_IN: LoggingIn,
};
