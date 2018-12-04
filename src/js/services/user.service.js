import {url} from '../constants/user.constants';

export const userService = {
    login
}

function login(info){
    const requestOptions ={
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(info)
    };
    return fetch(url.apiDomain + url.authUrl, requestOptions)
        .then(handleRespone)
        .then(user => {
            if(user.token){
                document.cookie = `access_token=${handleRespone.AccessToken}`;
                document.cookie = `token_type=${handleRespone.TokenType}`;
            }
            return user;
        });
}

function handleRespone(response){
    return response.text().then(text =>{
        const data = text && JSON.parse(text);
        if(!response.ok){
            if(response.status === 401){
                logout();
                location.reload(true);
            }
            // const error = (data && data.message) || (response.message);
            // const Promise.reject(error);
        }
        return data;
    });
}