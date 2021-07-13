import axios from 'axios'
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, UPDATE_USERS, FETCH_USER } from "./userType"

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

const fetchUserById = () => {
    return {
        type: FETCH_USER
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

export const fetchUser = () => {
    return (dispatch) => {
        axios.get('https://ti-react-test.herokuapp.com/users/:id')
            .then(response => {
                const user = response.data.id
                dispatch(fetchUserById(user))
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
        axios.patch('https://ti-react-test.herokuapp.com/users,', {
            bio: "MyText",
            email: "MyString",
            name:"MyString",
            occupation: "MyString"

        })
        .then(response => {
            return response;
        })
        .catch(err => err)
        
    }
}