import { USER_INFO } from '../constants/action_type.js'

export const userLogin = login => ({
    type: USER_INFO,
    payload: login
});
