import { useDispatch } from "react-redux";

// eslint-disable-next-line react-hooks/rules-of-hooks
const dispatch = useDispatch();

// Action
const CLICK_LOGIN = 'CLICK_LOGIN';

// Initial State
var initialInfo = {
    isLogin: false,
    id: ''
}

// Reducer
export default function reducer(currentState = initialInfo, action) {
    if (action.type === CLICK_LOGIN) {
        var newInfo = {...initialInfo, isLogin: true}
        return newInfo;
    }
    else {
        return currentState;
    }
}

export function clickLogin() {
    return () => {dispatch({type: 'CLICK_LOGIN'})}
}