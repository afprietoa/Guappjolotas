import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "@firebase/auth"
import { google } from "../firebase/firebase"
import { types } from "../types/types"

export const login = (id, displayname) =>{
    //funcion que retorna un objeto, las acciones retornan el type y el payload, 
    //aveces no es necesario el payload dependera de la accion a crear, es decir cuando se necesita mandar alguna indormación a alamacenar
    //mandamos el correo y la contraseña por el payload
    return{
        type: types.login,
        payload: {
            id, 
            displayname
        }

    }
}

export const loginGoogle = () =>{
    //se retorna una función ánonima que recibe un dispatch como parametro
    return (dispatch) =>{
        //se crea un auth con la función de firebase
        //para que todas las funciones que tengan que ver con autenticación funcionen bien
        const auth = getAuth()
        //esta función recibe como parametros el auth de autenticación y el google provider creado en la configuración de firebase
        //como en toda petición hay un then y un catch
        //la función al modal hará un Try/Cacth con un Try haciendo un dispatch a la accion de login y como catch que muestre de ser necesario el error en consola
        signInWithPopup(auth, google)
        //en el then se hace la desestructuración del user
        //el user lo devuelve firebase
        .then(({user})=>{
            dispatch(login(user.uid, user.displayName))
        })
        .catch(e=>{
            console.log(e)
        })

    }
}

export const loginEmailPassword = (email, password) =>{
    return(dispatch) =>{
        const auth= getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            dispatch(login(user.uid, user.displayName))
            console.log('Welcome'+ user.displayName)
        })
        .catch(e=>{
            console.log(e)
            console.log('Username does not exist')
        })
    }
}