export const ApiConfigConstants = {
    apiUrl: 'http://localhost:4000'
}
const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
const base_url='http://127.0.0.1:8000/car_service/api_rest/'
//export const iniciar_sesion=()=>`${ cors_anywhere }${ base_url }iniciar_sesion/`
export const iniciar_sesion=(username,password)=>`${ base_url }iniciar_sesion/?username=${ username }&password=${ password }`