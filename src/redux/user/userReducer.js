import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE,FETCH_USERS_REQUEST,UPDATE_USERS, FETCH_USER
 } from "./userType"

const initialState = {
    loading: false,
    users: [],
    user: {},
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
        case FETCH_USER:
            return {
                ...state,
                user: action.payload
            }     
        default: return state           
    }
}

export default UserReducer