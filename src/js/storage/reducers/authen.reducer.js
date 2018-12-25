import { userContants } from './../../_constants/user.constants';
import { get_cookie } from '../../_helpers/cookie'
// debugger

// let info = JSON.parse(document.cookie);
let info = get_cookie('AccessToken');
var initState = info ? { isLogin: true, user: info } : {};
// if (info) initState = { isLogin: true, user: info }
// else initState = {};


export function authen(state = initState, action) {
    switch (action.type) {
        case userContants.LOGIN_REQUEST:
            return {
                logging: true,
                user: action.info
            }
        case userContants.LOGIN_SUCCESS:
            return { ...state, isLogin: true, user: { ID: action.userInfo } }
        case userContants.LOGIN_FAILURE:
            return {
                logging: true,
                user: action.info
            }
        default:
            return state;
    }
}
