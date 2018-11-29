import { USER_LOGIN, USER_INFO } from '../constants/action_type.js'

export const addUser = (info) => ({
    type: USER_INFO,
    payload: info
});

export const userLogin = (info) => ({
    type: USER_LOGIN,
    payload: info
});
