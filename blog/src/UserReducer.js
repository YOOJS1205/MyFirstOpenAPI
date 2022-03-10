import { LOGIN_USER } from "./Type";

const UserReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload}
        default:
            return state;
    }
}

export default UserReducer;