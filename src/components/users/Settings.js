import React, { useState } from 'react';
import { updateEmail } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import { signIn } from '../../store/actions/authActions';

const Settings = ({ email, updateEmail }) => {

    const [data, setData] = useState({ testEmail: '', password: '', newEmail: '', oldEmail: email.replace(email.slice(0, 7), '*'.repeat(7)) });
    const [errors, setErrors] = useState({ emptyFieldError: '', emailError: '' })
    const [editMode, setEditMode] = useState(false);
    const handleMode = () => {
        setEditMode(true)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const validate = () => {
        let empty;
        let wrongEmail;
        const { emptyFieldError, emailError } = errors;
        if (!data.newEmail || !data.oldEmail || !data.password) {
            empty = 'ALL FIELDS MUST BE COMPLETED'
        }
        if (data.oldEmail !== email){
            wrongEmail = `email doesn't match`
        }
        if (empty || wrongEmail) {
            setErrors({
                emptyFieldError: empty,
                emailError: wrongEmail
            })
               return false
        }
        return true
    }

    const saveCreds = () => {
        console.log(data);
        if (validate(data)) {
            return updateEmail(data)
        }

    }
    return (
        <div className="flex flex-column p-5 m-5">
            <span>{data.email}</span>
            <button onClick={handleMode} type="button">edit</button>
            {editMode && <UserUpdateForm errors={errors} saveCreds={saveCreds} handleChange={handleChange} data={data} />}
        </div>
    )
}

const UserUpdateForm = ({ saveCreds, handleChange, data, errors }) => {
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Old Email</Form.Label>
                    <Form.Control value={data.oldEmail} type="email" placeholder="current email" name="oldEmail" onChange={handleChange} />
                </Form.Group>
                <span>{errors.emailError}</span>
                <Form.Group>
                    <Form.Label>New Email</Form.Label>
                    <Form.Control value={data.newEmail} type="email" placeholder="new email" name="newEmail" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Please Enter Your Password</Form.Label>
                    <Form.Control value={data.password} placeholder="Password" name="password" onChange={handleChange} />
                </Form.Group>
            </Form>
            <button variant="primary" type="submit" onClick={saveCreds}>Submit</button>
            <span>{errors.emptyFieldError}</span>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        updateEmail: (data) => dispatch(updateEmail(data))
    }
}

export default connect(null, mapDispatchToProps)(Settings)
