import { userContants } from './../../constants/user.constants';
let info = JSON.parse(document.cookie.access_token);
const initState = info ? { loggin: true, info } : {};

export function authen(state = initState, action) {
    switch (action.type) {
        case userContants.LOGIN_REQUEST:
            return {
                logging: true,
                user: action.info
            }
        case userContants.LOGIN_SUCCESS:
            return {
                logging: true,
                user: action.info
            }
        case userContants.LOGIN_FAILURE:
            return {
                logging: true,
                user: action.info
            }
    }
}
