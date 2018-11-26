import { USER_INFO } from '../../constants/action_type'
const initState = {
    users: []
};

const rootReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case USER_INFO:
            return { ...state, users: [...state.users, action.payload] };
        default:
            return state;
    }
};

export default rootReducer;