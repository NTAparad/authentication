import {AuthAction, AuthState} from "../types/Auth";

const initialState: AuthState = {
    isSignOut: true,
    isSignIn: false,
    userToken: null

}
const authenReducer = (state = initialState, action: AuthAction) => {
    switch (action.type) {
        case 'signIn': {
            console.log("trigger", action);
            return {
                ...state,
                isSignIn: true,
                isSignOut: false,
                userToken: action.token,
            }
        }
        case 'signOut': {
            return {
                ...state,
                isSignOut: true,
                isSignIn: false,
                userToken: null
            }
        }
        default:
            return state;
    }
};
export default authenReducer;