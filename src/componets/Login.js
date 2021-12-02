

import { Form, Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import React from 'react'
import { useDispatch } from 'react-redux';
import { login, loginEmailPassword, loginGoogle } from '../actions/loginAction';
import { useForm } from '../hooks/useForm';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = () => {

    const dispatch = useDispatch()
    //luego de hacer lo de abajo se hace useDispatch para lanzar la accion de login
    //seguido se almacena la información en el reducer, especificamente se configura en el archivo loginReducer

    //se modifica el componente login para lanzar esa accion de login
    //Por ser un formulario, se inicia con la implementación del customHook useForm
    
    //el useForm va a recibir cada uno de los inputs que van a estar en el formulario
    //para este caso será el email y el password
    const [ values, handleInputChange, reset ] = useForm({
        email: '',
        password: ''
    })

    //una vez recibida las variables email y password la vamos a retornar de forma estructurada
    const {email, password} = values
    //luego se coloca cada uno de los values en su respectivo input

    //se uso el useForm para traer los estados que van a estar en los inputs y se le coloca a cada uno su value y su metodo onChange

    //se crea el método handleSubmit para que se ejecute cada vez que se de click en el boton del formulario

    const handleSubmit = (e) => {
        // se previene el evento para que la página no se reinicie
        // sin esto la página se va a reiniciar y todo va a fallar
        e.preventDefault()
        
        reset()
        //se coloca el dispatch en handleSubmit, cuando se le de al boton de login o de enviar entonces este dispare la accion de login
        //el login recibe dos parametros el id y el displayname, que en este caso seria el email y el password
        dispatch(loginEmailPassword(email, password))
    }

    const handleLoginGoogle = () =>{
        dispatch(loginGoogle())
    }

    return (
        <div className="container-card">
            <Card>
                <Card.Body>
                    <Card.Title>Log-In Form</Card.Title>
                    <Form onSubmit={handleSubmit} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={handleInputChange} 
                                />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={handleInputChange} 
                                />
                        </Form.Group>
                        <div className="container-botom">
                            <Button variant="danger" type="submit" className='btn-orange'>
                                LOGIN
                            </Button>
                            <span> o </span>
                            <Button variant="outline-warning" type="submit" onClick={handleLoginGoogle} >
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                            </Button>
                            <hr />
                            <span> Don't have an account? <Link to="/signIn"> Sign up</Link></span>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
