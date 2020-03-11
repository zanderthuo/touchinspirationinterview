import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE,FETCH_USERS_REQUEST,UPDATE_USERS
 } from "./userType"

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        case UPDATE_USERS:
            return {
                ...state,
                loading: true
            }    
        default: return state           
    }
}

export default UserReducer