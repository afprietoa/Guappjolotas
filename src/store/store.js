import {createStore,  combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { loginReducer } from '../reducers/loginReducer'
import { registerReducer } from '../reducers/registerReducer';

//dicha constante es la combinación de todos los middlewares además adjunta la configurración de reduz DevTools

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//una constante reducers que va a recibir la funcion combineReducers 
//que va a recibir como objeto a cada uno de esos reducers que yo quiero combinar
const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer
})
// creamos una constante store que sera igual a la funcion createStore
// que recibe esos reducer combinados y una configuración para usar el DevTools
// Cuando utilizamos redux con middleware la configuración cambia de la estándar dedido a las peticiones que requiere hacer
export const store = createStore(
    reducers,
    //dicha función recibe como parametro un middleware
    composeEnhancers(
        //aplica el middleware a definir
        //aplica el middleware de thunk
        applyMiddleware(thunk)
        //el middleware es una conexión, como un puente entre aplicaiones, entre softwares, entre cualquier cosa que se quiera conectar
        //Para este caso el middleware va a hacer una conexión entre nuestra aplicación y el servidor de firebase, el nombre que tiene ese puente es thunk
        //si nose coloca el middleware no se podra hacer peticiones a una api o a un servidor como firebase
        //es necesario porque es una aplicación asincrona
        )
)
//En este archivo esta el combineReducer que combina los reducers y el composeEnhancers que combina los middleware
//y estas se colocan dentro del store y así queda la configuración
 //lo anterior es la configuración necesaria para usar middlware en los reducers