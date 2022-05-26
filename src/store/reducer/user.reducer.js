import actionTypes from "../actions/actionTypes";

const userState = {
    data: null,
    isLoading: false,
    error: null,
}

export const userReducer = (oldState = userState, action) => {
    switch(action.type) {
        case actionTypes.REGISTER_USER_REQUEST: {
            return  {
                ...oldState,
                isLoading: true,
            }
        }
        case actionTypes.REGISTER_USER_SUCCESS: {
            return  {
                ...oldState,
                data: action.payload,
                isLoading: false,
            }
        }
        case actionTypes.REGISTER_USER_ERROR: {
            return {
                ...oldState,
                error: action.payload,
                isLoading: false,
            }
        }
        default: {
            return oldState;
        }
    }
}
