import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers, updateUser } from '../redux'
import { Table } from 'react-bootstrap'
import '../css/UserContainer.css'

function UserContainer({ userData, fetchUsers  }) {

    useEffect(() => {
        fetchUsers()
        updateUser()
    }, [])
    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
        {
            userData.users.map(user => <Table className="container" key={user.id}>
                
                <thead>
                    <tr>
                        <th>user</th>
                        <th>bio</th>
                        <th>email</th>
                        <th>occupation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.bio}</td>
                        <td>{user.email}</td>
                        <td>{user.occupation}</td>
                    </tr>
                </tbody>
                </Table>)
                
        }           
        </div>

    )
}

const mapaStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapaDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        updateUser: () => dispatch(updateUser())
    }
}

export default connect(mapaStateToProps,mapaDispatchToProps)(UserContainer)
