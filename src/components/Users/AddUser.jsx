import React, { useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import classes from './AddUser.module.scss'

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    const addUserHandler = event => {
        event.preventDefault()
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input!',
                message: 'Please enter a valid username and age!'
            })
            return
        }
        if(+enteredAge < 1 || +enteredAge > 99) {
            setError({
                title: 'Invalid age!',
                message: 'Please enter a valid age!(1-99)'
            })
            return
        }
        props.onAddUser(enteredUsername, +enteredAge)
        setEnteredAge('')
        setEnteredUsername('')
    }

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value)
    }
    const ageChangeHandler = event => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <div>
            {error && 
            <ErrorModal 
                title={error.title} 
                message={error.message}
                onConfirm={errorHandler}
            /> }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username '>Username</label>
                    <input 
                        id='username' 
                        type='text' 
                        onChange={usernameChangeHandler}
                        value={enteredUsername}
                    />
                    <label htmlFor='age'>Age (Years)</label>
                    <input 
                        id='age' 
                        type='number' 
                        onChange={ageChangeHandler}
                        value={enteredAge}
                    />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser