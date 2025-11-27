import { JSX } from "react";

export interface AuthState {
 label: string;
 ui: JSX.Element;
 login?: () => AuthStatus;
 logout?: () => AuthStatus;
}

export type AuthStatus = "LOGGED_IN" | "LOGGED_OUT" | "LOGGING_IN";
