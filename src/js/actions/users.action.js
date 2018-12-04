import { LOGIN_REQUEST, USER_INFO } from '../constants/action_type.js'
import { userService } from '../services/user.service';
// import { userService } from './../services/user.service';
import { alertAction } from './alert.action';

export const addUser = (info) => ({
    type: USER_INFO,
    payload: info
});


export const userActions = {
    login,
}

function login(info) {
    return dispatch => {
        dispatch(request(info));

        userService.login(info)
        .then(
            info => {
                dispatch(success(info));
                history.push('/');
            },
            error => {
                dispatch(failure(error.toString()));
                dispatch(alertAction.error(error.toString()));
            }
        )
    };
    
    function request(info) { return { type: LOGIN_REQUEST, payload: info } }
    function success(info) { return { type: LOGIN_SUCCESS, payload: info } }
    function failure(error) { return { type: LOGIN_FAILURE, error } }
}