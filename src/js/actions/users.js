import { USER_INFO } from '../constants/action_type.js'

export const addUser = info => ({
    type: USER_INFO,
    payload: info
});
