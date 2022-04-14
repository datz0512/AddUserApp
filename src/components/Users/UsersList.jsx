import React from 'react'
import Card from '../UI/Card'
import classes from './UsersList.module.scss'

const UsersList = props => {
    const users = props.users.map(user => {
        return (
            <li key={user.id}>
                {user.name} - {user.age} years old
            </li> 
        )
    })
    return (
        <Card className={classes.users}>
            <ul>
                {users}
            </ul>
        </Card>
    )
}

export default UsersList