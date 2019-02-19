export const setLoggedIn = (status) => {
    return{
        type: "SET_LOGGED_IN",
        isLoggedIn: status
    }
}