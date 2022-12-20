export const signIn = (token: string) => {
    return {
        type: 'signIn',
        token: token,
    }
}
export const signOut = () => {
    return {
        type: 'signOut',
    }
}