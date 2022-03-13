// Action
const OPEN = 'OPEN';

// Initial State
const initialState = {
    isOpen: false
}

// Action 생성 함수
export const clickOpen = () => ({ type: OPEN });

// Reducer
export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN:
            return {
                ...state,
                isOpen: !state.isOpen
            };
        default:
            return state
    }
}