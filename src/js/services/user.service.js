import { url, userContants } from '../constants/user.constants';

export const userService = {
    login
}

function login(info) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // credentials: 'include',

        body: JSON.stringify(info)
    };
    // fetch(`${url.apiDomain} + ${url.authUrl}`, requestOptions)
    // .then(handleRespone)
    // .then(user => {
    //     if (user.token) {
    //         document.cookie = `access_token=${handleRespone.AccessToken}`;
    //         document.cookie = `token_type=${handleRespone.TokenType}`;
    //     }
    //     return { type: userContants.LOGIN_SUCCESS };
    // });
    // fetch(url.apiDomain + url.authUrl, requestOptions)
    fetch(url.apiDomain + url.authUrl, requestOptions)
        .then(handleRespone)
        .then(user => {
            if (user.token) {
                document.cookie = `access_token=${handleRespone.AccessToken}`;
                document.cookie = `token_type=${handleRespone.TokenType}`;
            }
            return { type: userContants.LOGIN_SUCCESS };
        })
    // var http = new XMLHttpRequest();
    // // var url = 'get_data.php';
    // var params = 'LoginUser=ipsum&LoginPass=binny';
    // http.open('POST', url.apiDomain + url.authUrl, true);

    // //Send the proper header information along with the request
    // http.setRequestHeader('Content-type', 'application/json');

    // http.onreadystatechange = function () {//Call a function when the state changes.
    //     if (http.readyState == 4 && http.status == 200) {
    //         alert(http.responseText);
    //     }
    // }
    // http.send();
    // return { type: userContants.LOGIN_SUCCESS };
}

function handleRespone(response) {
    return response.text().then(text => {
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