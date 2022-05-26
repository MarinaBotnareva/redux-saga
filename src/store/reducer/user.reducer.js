import actionTypes from "../actions/actionTypes";

const userState = {
    data: null,
    isLoading: false,
    error: null,
}


export const userReducer = (oldState = userState, action) => {
    switch(action.type) {
        case actionTypes.REGISTER_USER: {
            console.log(action);
            return  {
                ...oldState,
                data: action.payload,
            }
        }
        default: {
            return oldState;
        }
    }
}
