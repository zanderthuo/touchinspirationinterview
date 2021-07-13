import React,{ useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { Row, Col, Card, CardBody, Form, FormGroup, Container, Input, Label } from 'reactstrap';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { useDispatch } from 'react-redux'

import { updateUser, fetchUser } from '../redux';

import { useHistory, useParams } from "react-router-dom";

import styled from 'styled-components';


// TODO : FIX EDIT OF USER
const EditUser = ({fetchUser}) => {
    let history = useHistory();
    const { id } = useParams();

    const dispatch = useDispatch();

    const [user, setUser] = useState({
        name: '',
        occupation: '',
        email: '',
        bio: ''
    });

    const { name, occupation, email, bio } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, [])

    const handleSubmit = async e => {
        e.preventDefault();
        updateUser();
        history.push("/");
    }
    
    const loadUser = () => {
        const result = axios.get(`https://ti-react-test.herokuapp.com/users/${id}`);
        setUser(result.data);
    }

    const CustomButton = styled.button`
    position: relative;
    width: 195px;
    height: 42px;
    left: 600px;
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
            <ArrowBackIcon />
            <div>
                <Row>
                    <Col lg="12">
                        <Card>
                            <CardBody>
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col xl="9">
                                            <Row>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <Label></Label>
                                                        <Input 
                                                            name="name"
                                                            type="text"
                                                            className="form-control"
                                                            value={name}
                                                            onChange={onInputChange}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <Label></Label>
                                                        <Input 
                                                            name="occupation"
                                                            type="text"
                                                            className="form-control"
                                                            value={occupation}
                                                            onChange={onInputChange}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <Label></Label>
                                                        <Input 
                                                            name="email"
                                                            type="email"
                                                            className="form-control"
                                                            value={email}
                                                            onChange={onInputChange}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <Label></Label>
                                                        <Input 
                                                            name="bio"
                                                            type="text"
                                                            className="form-control"
                                                            value={bio}
                                                            onChange={onInputChange}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <CustomButton>
                                                Edit
                                            </CustomButton>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        updateUser: () => dispatch(updateUser())
    }
}

export default connect(null, mapDispatchToProps)(EditUser)
