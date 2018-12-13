import { USER_INFO, LOGIN_REQUEST } from '../../constants/action_type.js'
import {combineReducers} from 'redux';
import {alert} from './alert.reducer';
import {authen} from './authen.reducer';

const initState = {
    user: {},
    isLogin: false,
    errorMessage:[]
};

function rootReducer(state = initState, action = {}) {
    switch (action.type) {
        // case 
        case USER_INFO:
            // debugger;
            if (action.payload.id && action.payload.pass) {
                return { ...state, users: [...state.users, action.payload] };
            }
        case LOGIN_REQUEST:
            //  debugger
            if (action.payload.id && action.payload.pass) {
                return { ...state, users: [...state.users, action.payload] };
            }
        default:
            return state;
    }
};
export default rootReducer;
// export default rootReducer = combineReducers({
//     alert,
//     authen,
//     rootReducer
// });