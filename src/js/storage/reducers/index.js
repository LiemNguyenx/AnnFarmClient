import { USER_INFO } from '../../constants/action_type.js'
const initState = {
    users: []
};

const rootReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case USER_INFO:
            // debugger;
            if (action.payload.id && action.payload.pass) {
                return { ...state, users: [...state.users, action.payload] };
            }
        default:
            return state;
    }
};

export default rootReducer;