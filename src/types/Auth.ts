import authenReducer from "../Reducers/reducer";

export interface AuthState {
    isSignIn: boolean;
    isSignOut: boolean;
    userToken: string | null;
}

type SignIn = {
    type: "signIn";
    token: string;
};

type SignOut = {
    type: "signOut";
    token: string;
};

export type AuthAction = SignIn | SignOut;

export type Type = {
    reducer: AuthState
}

