import axios from 'axios'
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, UPDATE_USERS } from "./userType"

export const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUserSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUserFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const updateUsersRequest = () => {
    return {
        type: UPDATE_USERS
    }
}

export const fetchUsers = () =>{
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('https://ti-react-test.herokuapp.com/users')
            .then(response => {
                const users = response.data
                dispatch(fetchUserSuccess(users))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUserFailure(errorMsg))
            })
    }
}

export const updateUser = id => {
    return (dispatch) => {
        dispatch(updateUsersRequest)
        axios.patch('https://ti-react-test.herokuapp.com/users/{id}', {
            title: 'Updated Users',
            completed: true
        })
        .then(response => {
            return response;
        })
        .catch(err => err)
        
    }
}