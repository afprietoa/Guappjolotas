import React from 'react'
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { registerEmailPassword } from '../actions/registerAction';
import { useForm } from '../hooks/useForm';

const SignIn = () => {

    const dispatch = useDispatch()

    const [ values, handleInputChange, reset ] = useForm({
        name: '',
        email: '',
        pass1:'',
        pass2:''
    })

    
    const {name, email, pass1, pass2} = values

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(pass1 === pass2){
            dispatch(registerEmailPassword(email, pass1, name))
        }else{
            console.log('Passwords are not the same')
        }
        

        reset()
    }

    return (
        <div className="container-card">
            <Card>
                <Card.Body>
                    <Card.Title >Sign-In Form</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={name}
                                onChange={handleInputChange}
                                
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>E-Mail</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                                
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                name="pass1"
                                value={pass1}
                                onChange={handleInputChange}
                                
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                            <Form.Label>Repeat password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                name="pass2"
                                value={pass2}
                                onChange={handleInputChange}
                                
                            />
                        </Form.Group>
                        <div className="container-botom">
                            <Button variant="danger" type="submit" className='btn-orange'>
                                Sign In
                            </Button>
                            <hr />
                            <span> Already have an account? <Link to="/login"> LOG IN</Link></span>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div >
    )
}
export default SignIn