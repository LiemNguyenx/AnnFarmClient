import {alertConstants} from '../constants/alert.constans'

export const alertAction = {
    succes,
    error,
    clear
}

const succes = message =>{
    return {
        type: alertConstants.SUCCES,
        message
    }
}

const error = message =>{
    return {
        type: alertConstants.ERROR,
        message
    }
}

const clear = message =>{
    return {
        type: alertConstants.CLEAR,
        message
    }
}