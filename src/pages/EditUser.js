import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { Row, Col, Card, CardBody, Form, FormGroup, Container, Input, Label } from 'reactstrap';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextField from '@material-ui/core/TextField';

import { useDispatch, useSelector } from 'react-redux'

import { updateUser, fetchUser } from '../redux';

import { useHistory, useParams } from "react-router-dom";

import styled from 'styled-components';


// TODO : FIX EDIT OF USER
const EditUser = ({user}) => {
    const [state, setState] = useState({
        name: '',
        occupation: '',
        email: '',
        bio: '',
    })
    // const { user } = useSelector((state) => state.data);

    let history = useHistory();
    const { id } = useParams();

    const { name, occupation, email, bio } = state;

    const dispatch = useDispatch();

    // const [name, setName] = useState('')
    // const [occupation, setOccupation] = useState('')
    // const [email, setEmail] = useState('')
    // const [bio, setBio] = useState('')
    


    useEffect(() => {
        dispatch(fetchUser(id));
    }, []);

    useEffect(() => {
        if (user) {
            setState({ ...user })
        }
    }, [user])

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value})
    }

    const handleSubmit = async e => {
        e.preventDefault();
        dispatch(updateUser(state));
        history.push("/");
    }

    const loadUser = () => {
        axios.get(`https://ti-react-test.herokuapp.com/users/${id}`)
            .then((res) => {
                const userData = res.data.id
                // setUserState(userData);
                console.log(userData);
            }).catch((err) => {
                console.error(err)
            });
        // dispatch(fetchUser(id));
    }

    const CustomButton = styled.button`
    position: relative;
    width: 95px;
    height: 42px;
    left: 0px;
    top: 5px;
    background: #1CBB8C;
    color: #fff;
    border: none;
    border-radius: 4px;
    &:hover {
      background-color: #fff;
      color: #1CBB8C;
      border: 1px solid #1CBB8C;
    }
  `

    return (
        <div>
            <h3>Edit User</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="standard-basic" value={name} name="name" type="text" label="Name" onChange={handleInputChange} />
                <br />
                <TextField id="standard-basic" value={occupation} name="occupation" type="text" label="occupation" onChange={handleInputChange} />
                <br />
                <TextField id="standard-basic" value={email} name="email" type="email" label="Email" onChange={handleInputChange} />
                <br />
                <TextField id="standard-basic" value={bio} name="bio" type="text" label="Bio" onChange={handleInputChange} />
                <br />
                <CustomButton>Update</CustomButton>
            </form>
        </div>
    )
}

const mapaStateToProps = state => {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUser: () => dispatch(updateUser()),
        fetchUser: () => dispatch(fetchUser())
    }
}

export default connect(mapaStateToProps, mapDispatchToProps)(EditUser)
