import Cookies from "js-cookie";

const Auth = {
    isAuthorization: () => (!!Cookies.get("accessToken") ? true : false),
        getToken: () => Cookies.get("accessToken"),
        logout: () => Cookies.remove("accessToken"),
    };

export default Auth;