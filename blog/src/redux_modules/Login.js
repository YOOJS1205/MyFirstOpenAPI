// Action
const CLICK_LOGIN = 'CLICK_LOGIN';

// Initial State
var initialInfo = {
    isLogin: false,
    id: ''
}

// Action 생성 함수
export const clickLogin = () => ({ type: CLICK_LOGIN });

// Reducer
export default function loginReducer(state = initialInfo, action) {
    switch (action.type) {
        case CLICK_LOGIN:
            return {
                ...state,
                isLogin: !state.isLogin
            };
        default:
            return state
    }
}