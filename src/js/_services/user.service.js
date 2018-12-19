import { url, userContants } from '../_constants/user.constants';
import { remove_cookie } from '../_helpers/cookie'
export const userService = {
    login
}

function login(info) {
    return (dispatch) => {
        return fetch(url.apiDomain + url.authUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            // credentials: 'include',

            body: JSON.stringify(info)
        }).then(handleRespone).then(res => {
            var userInfo = parseJwt(res).ID;
            document.cookie = `AccessToken=${res.accessToken}`;
            document.cookie = `UserID=${userInfo}`;
            return dispatch({ type: userContants.LOGIN_SUCCESS, userInfo: userInfo });
        })
    }
}
// funtion getUserInfo(){

// }
function logout() {
    remove_cookie('AccessToken');
    remove_cookie('UserID');
}
function parseJwt(token) {
    var base64Url = token.accessToken.toString().split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
};
function handleRespone(response) {
    var responseCopy = response.clone();
    return responseCopy.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 400) {
                logout();
                location.reload(true);
            }
            // const error = (data && data.message) || (response.message);
            // const Promise.reject(error);
        }
        return data;
    });
}