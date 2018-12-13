import { url, userContants } from '../constants/user.constants';

export const userService = {
    login
}

function login(info) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        // credentials: 'include',

        body: JSON.stringify(info)
    };
    fetch(url.apiDomain + url.authUrl, requestOptions)
        .then(handleRespone)
        .then(user => {
            // debugger;
            if (user.accessToken) {
                var userInfo = parseJwt(user);
                document.cookie = `{"access_token"="${user.accessToken}"}`;
                document.cookie = `{"UserID"="${userInfo.ID}"}`;
            }
            return { type: userContants.LOGIN_SUCCESS, userInfo: userInfo };
        })

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
            if (response.status === 401) {
                logout();
                location.reload(true);
            }
            // const error = (data && data.message) || (response.message);
            // const Promise.reject(error);
        }
        return data;
    });
}